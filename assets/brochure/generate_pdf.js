const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const htmlPath = `file:${path.join(__dirname, 'brochure.html')}`;
        
        await page.goto(htmlPath, { waitUntil: 'networkidle0' });
        
        await page.pdf({
            path: 'FoxPlayer_Algo_Technologies_E_Brochure.pdf',
            format: 'A4',
            printBackground: true,
            margin: { top: 0, right: 0, bottom: 0, left: 0 }
        });
        
        console.log('PDF generated successfully');
        await browser.close();
    } catch (err) {
        console.error('Error generating PDF:', err);
    }
})();
