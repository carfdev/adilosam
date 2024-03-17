import replace from 'replace-in-file'
import gulp from 'gulp';
import rename from 'gulp-rename'
import fs from 'fs'


//Declarar constantes
const css = 'about.CyMLqeeO.css';
const font1 = 'public-sans-latin-ext-wght-normal.D4Umos5N.woff2';
const font2 = 'public-sans-latin-wght-normal.RswtdM0r.woff2';
const font3 = 'public-sans-vietnamese-wght-normal.BCRJOvr-.woff2';



const optionsCss = {
  files: 'dist/**/*.html', // ajusta la ruta según donde tengas tus archivos HTML generados
  from: `/_astro/${css}`, // el nombre del archivo CSS antiguo
  to: '/styles/style.css', // el nuevo nombre del archivo CSS
};

const optionsFont1 = {
  files: `dist/_astro/${css}`, // ajusta la ruta según donde tengas tus archivos HTML generados
  from: `/_astro/${font1}`, // el nombre del archivo CSS antiguo
  to: `/font/${font1}`, // el nuevo nombre del archivo CSS
};
const optionsFont2 = {
  files: `dist/_astro/${css}`, // ajusta la ruta según donde tengas tus archivos HTML generados
  from: `/_astro/${font2}`, // el nombre del archivo CSS antiguo
  to: `/font/${font2}`, // el nuevo nombre del archivo CSS
};
const optionsFont3 = {
  files: `dist/_astro/${css}`, // ajusta la ruta según donde tengas tus archivos HTML generados
  from: `/_astro/${font3}`, // el nombre del archivo CSS antiguo
  to: `/font/${font3}`, // el nuevo nombre del archivo CSS
};

replace(optionsCss)
  .then(results => {
    console.log('Referencias al archivo CSS actualizadas:', results);
  })
  .catch(error => {
    console.error('Error al actualizar las referencias al archivo CSS:', error);
  });

  replace(optionsFont1)
  .then(results => {
    console.log('Referencias al archivo CSS actualizadas:', results);
  })
  .catch(error => {
    console.error('Error al actualizar las referencias al archivo CSS:', error);
  });

  replace(optionsFont2)
  .then(results => {
    console.log('Referencias al archivo CSS actualizadas:', results);
  })
  .catch(error => {
    console.error('Error al actualizar las referencias al archivo CSS:', error);
  });

  replace(optionsFont3)
  .then(results => {
    console.log('Referencias al archivo CSS actualizadas:', results);
  })
  .catch(error => {
    console.error('Error al actualizar las referencias al archivo CSS:', error);
  });


  function renameCss() {
    return gulp.src(`dist/_astro/${css}`) // ajusta la ruta según donde Astro genere tu CSS
      .pipe(rename('styles/style.css')) // renombra el archivo CSS a 'styles.css'
      .pipe(gulp.dest('dist')) // ajusta la ruta de destino según tu estructura de proyecto
      .on('end', function() {
        // Cambiar los permisos del archivo CSS generado
        fs.chmodSync('dist/styles/style.css', '644');
      });
  }
  
  function renameFont1() {
    return gulp.src(`dist/_astro/${font1}`) // ajusta la ruta según donde Astro genere tu CSS
      .pipe(rename(`font/${font1}`)) // renombra el archivo CSS a 'styles.css'
      .pipe(gulp.dest('dist')) // ajusta la ruta de destino según tu estructura de proyecto
      .on('end', function() {
        // Cambiar los permisos del archivo CSS generado
        fs.chmodSync(`dist/font/${font1}`, '644');
      });
  }
  
  function renameFont2() {
    return gulp.src(`dist/_astro/${font2}`) // ajusta la ruta según donde Astro genere tu CSS
      .pipe(rename(`font/${font2}`)) // renombra el archivo CSS a 'styles.css'
      .pipe(gulp.dest('dist')) // ajusta la ruta de destino según tu estructura de proyecto
      .on('end', function() {
        // Cambiar los permisos del archivo CSS generado
        fs.chmodSync(`dist/font/${font2}`, '644');
      });
  }
  
  function renameFont3() {
    return gulp.src(`dist/_astro/${font3}`) // ajusta la ruta según donde Astro genere tu CSS
      .pipe(rename(`font/${font3}`)) // renombra el archivo CSS a 'styles.css'
      .pipe(gulp.dest('dist')) // ajusta la ruta de destino según tu estructura de proyecto
      .on('end', function() {
        // Cambiar los permisos del archivo CSS generado
        fs.chmodSync(`dist/font/${font3}`, '644');
      });
  }
  
  renameCss();
  renameFont1();
  renameFont2();
  renameFont3();



