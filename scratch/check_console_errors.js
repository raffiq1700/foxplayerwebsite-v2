const puppeteer = require('puppeteer');
const { spawn, execSync } = require('child_process');

async function main() {
  console.log("Running production build (prisma generate && next build)...");
  try {
    execSync('npx prisma generate && npx next build', {
      cwd: 'd:\\foxplayer algo technologies',
      stdio: 'inherit',
      shell: true
    });
  } catch (err) {
    console.error("Build failed:", err.message);
    process.exit(1);
  }

  console.log("Starting Next.js production server...");
  const prodServer = spawn('npx', ['next', 'start', '-p', '3001'], {
    cwd: 'd:\\foxplayer algo technologies',
    shell: true,
    env: { ...process.env, PORT: '3001' }
  });

  prodServer.stdout.on('data', (data) => {
    console.log(`[Server]: ${data.toString().trim()}`);
  });

  prodServer.stderr.on('data', (data) => {
    console.error(`[Server Error]: ${data.toString().trim()}`);
  });

  // Wait 5 seconds for production server to start
  await new Promise(resolve => setTimeout(resolve, 5000));

  console.log("Launching Puppeteer...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  const consoleErrors = [];
  const uncaughtExceptions = [];

  page.on('console', msg => {
    const text = msg.text();
    if (msg.type() === 'error') {
      consoleErrors.push({ url: page.url(), text });
      console.log(`Console Error on ${page.url()}: ${text}`);
    }
  });

  page.on('response', response => {
    if (response.status() === 404) {
      console.log(`404 ERROR on ${page.url()}: ${response.url()}`);
    }
  });

  page.on('pageerror', err => {
    uncaughtExceptions.push({ url: page.url(), text: err.message });
    console.log(`Uncaught Exception on ${page.url()}: ${err.message}`);
  });

  const urlsToTest = [
    'http://localhost:3001/',
    'http://localhost:3001/about',
    'http://localhost:3001/pricing',
    'http://localhost:3001/contact',
    'http://localhost:3001/features',
    'http://localhost:3001/faq'
  ];

  for (const url of urlsToTest) {
    console.log(`Navigating to ${url}...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
      await new Promise(resolve => setTimeout(resolve, 1500)); // wait for dynamic scripts
    } catch (e) {
      console.error(`Failed to navigate to ${url}: ${e.message}`);
    }
  }

  console.log("\n--- REPORT ---");
  console.log(`Total Console Errors: ${consoleErrors.length}`);
  console.log(`Total Uncaught Exceptions: ${uncaughtExceptions.length}`);

  if (consoleErrors.length > 0) {
    console.log("\nList of Console Errors:");
    consoleErrors.forEach((err, index) => {
      console.log(`${index + 1}. [${err.url}] ${err.text}`);
    });
  }

  if (uncaughtExceptions.length > 0) {
    console.log("\nList of Uncaught Exceptions:");
    uncaughtExceptions.forEach((err, index) => {
      console.log(`${index + 1}. [${err.url}] ${err.text}`);
    });
  }

  await browser.close();
  prodServer.kill('SIGINT');
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
