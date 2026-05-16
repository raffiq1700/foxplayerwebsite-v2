const fs = require('fs');

const b64 = fs.readFileSync('../../public/logo.png').toString('base64');
let html = fs.readFileSync('brochure.html', 'utf8');

// Replace cover logo
html = html.replace(
    /<div class="logo-large">FP<\/div>/, 
    `<div class="logo-large" style="background:none;border:none;"><img src="data:image/png;base64,${b64}" style="width:100%;height:100%;border-radius:50%;object-fit:contain;" /></div>`
);

// Replace header logo placeholders
html = html.replace(
    /<div class="logo-placeholder">FoxPlayer <span>Algo<\/span><\/div>/g, 
    `<div class="logo-placeholder" style="display:flex;align-items:center;gap:10px;"><img src="data:image/png;base64,${b64}" style="width:30px;height:30px;border-radius:50%;" />FoxPlayer <span>Algo</span></div>`
);

// Add watermark
html = html.replace(
    /<style>/, 
    `<style>.page::after{content:"";position:absolute;top:50%;left:50%;width:600px;height:600px;background:url(data:image/png;base64,${b64}) no-repeat center center;background-size:contain;opacity:0.05;transform:translate(-50%,-50%);pointer-events:none;z-index:0;}`
);

fs.writeFileSync('brochure.html', html);
console.log('brochure.html updated with logos and watermark');
