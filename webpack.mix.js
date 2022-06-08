let mix = require('laravel-mix');

mix.setPublicPath("public");

mix.options({
    processCssUrls: false,
    // postCss: [ tailwindcss('./tailwind.config.js') ],
});
mix.postCss("./css/index.css", "public/css/app.css", [
    require("tailwindcss"),
]);
mix.js(
    "js/index.js",
    "public/js/app.js"
);
// mix.sass(
//     "sass/index.scss",
//     "public/css/app.css"
// );


if (mix.inProduction() ){
    mix.version();
}