const mix = require('laravel-mix').mix;

const resources = 'resources/assets';
const themePath = 'public/themes/wordplate';
const assetsPath = `${themePath}/assets`;

mix.setPublicPath(assetsPath);
mix.setResourceRoot('../');

mix.browserSync({
    proxy: 'wordplate.test',
    files: [
        `${themePath}/**/*.php`,
        `${assetsPath}/**/*.js`,
        `${assetsPath}/**/*.css`
    ],
    browser: "Google Chrome"
});

mix.js(`${resources}/scripts/app.js`, `${assetsPath}/scripts`);

mix.sass(`${resources}/styles/app.scss`, `${assetsPath}/styles`, {
    includePaths: ['node_modules']
});

// mix.sass(`${resources}/styles/editor-style.scss`, `${assetsPath}/styles`, {
//     includePaths: ['node_modules']
// });

// Hash and version files in production.
if (mix.config.inProduction) {
    mix.version();
}