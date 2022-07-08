const mix = require('laravel-mix');

mix.setPublicPath('public');

mix.version();

if (mix.inProduction()) {
    mix.sourceMaps();
}

mix.sass('resources/scss/app.scss', 'public/css/app.css');

// mix.js('src/app.js', 'dist').setPublicPath('dist');