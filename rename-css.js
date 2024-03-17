import replace from 'replace-in-file';
import gulp from 'gulp';
import rename from 'gulp-rename';
import fs from 'fs';

// Define los nombres de los archivos de fuente y las opciones de reemplazo
const fonts = [
  {
    name: 'public-sans-latin-ext-wght-normal.D4Umos5N.woff2',
    options: {
      from: '/_astro/public-sans-latin-ext-wght-normal.D4Umos5N.woff2',
      to: '/font/public-sans-latin-ext-wght-normal.D4Umos5N.woff2'
    }
  },
  {
    name: 'public-sans-latin-wght-normal.RswtdM0r.woff2',
    options: {
      from: '/_astro/public-sans-latin-wght-normal.RswtdM0r.woff2',
      to: '/font/public-sans-latin-wght-normal.RswtdM0r.woff2'
    }
  },
  {
    name: 'public-sans-vietnamese-wght-normal.BCRJOvr-.woff2',
    options: {
      from: '/_astro/public-sans-vietnamese-wght-normal.BCRJOvr-.woff2',
      to: '/font/public-sans-vietnamese-wght-normal.BCRJOvr-.woff2'
    }
  }
];

// Opciones para reemplazar el archivo CSS
const optionsCss = {
  files: 'dist/**/*.html',
  from: '_astro/about.CyMLqeeO.css',
  to: 'styles/style.css'
};

// Función para realizar el reemplazo con un retardo de 1 segundo
function replaceFilesWithDelay(options, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      replace(options)
        .then(results => {
          console.log('Referencias actualizadas:', results);
          resolve();
        })
        .catch(error => {
          console.error('Error al actualizar las referencias:', error);
          reject(error);
        });
    }, delay);
  });
}

// Realizar el reemplazo para el archivo CSS
replaceFilesWithDelay(optionsCss, 0); // No hay retraso para el archivo CSS

// Realizar el reemplazo para cada archivo de fuente con un retardo de 1 segundo
fonts.forEach((font, index) => {
  const optionsFont = {
    files: `dist/_astro/about.CyMLqeeO.css`,
    from: font.options.from,
    to: font.options.to
  };
  const delay = (index + 1) * 1000; // Retraso de 1 segundo entre cada ejecución
  replaceFilesWithDelay(optionsFont, delay);
});

// Función para renombrar los archivos
function renameFile(src, dest) {
  return gulp.src(src)
    .pipe(rename(dest))
    .pipe(gulp.dest('dist'))
    .on('end', function () {
      fs.chmodSync(`dist/${dest}`, '644');
    });
}

setTimeout(() => {
  renameFile(`dist/${optionsCss.from}`, optionsCss.to);
}, 4000);


// Renombrar cada archivo de fuente con un retardo de 1 segundo
fonts.forEach((font, index) => {
  const src = `dist/_astro/${font.name}`;
  const dest = `font/${font.name}`;
  const delay = (index + 1) * 1000; // Retraso de 1 segundo entre cada ejecución
  setTimeout(() => {
    renameFile(src, dest);
  }, delay);
});



