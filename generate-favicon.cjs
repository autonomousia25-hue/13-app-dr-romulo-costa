const fs = require('fs');
const img = fs.readFileSync('public/logo-oficial.jpg');
const b64 = img.toString('base64');
const svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="circleView">
      <circle cx="50" cy="50" r="50" fill="#FFFFFF"/>
    </clipPath>
  </defs>
  <image width="100" height="100" href="data:image/jpeg;base64,${b64}" clip-path="url(#circleView)" preserveAspectRatio="xMidYMid slice"/>
</svg>`;
fs.writeFileSync('public/favicon.svg', svg);
console.log("Favicon SVG gerado com sucesso.");
