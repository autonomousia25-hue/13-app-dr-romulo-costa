const { Vibrant } = require('node-vibrant/node');
Vibrant.from('public/logo-oficial.jpg').getPalette()
  .then((palette) => {
    for (const key in palette) {
      if (palette[key]) {
        console.log(`${key}: ${palette[key].hex}`);
      }
    }
  })
  .catch(err => console.error(err));
