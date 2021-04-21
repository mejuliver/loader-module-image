const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['build/*.{jpg,png}'], {
  destination: __dirname + '/build/webp/',
  plugins: [
    imageminWebp({
      quality: 60
    })
  ]
}).then(() => {
  console.log('Images optimized');
});