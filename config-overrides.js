const path = require('path');

module.exports = {
    paths: function (paths, env) {
        paths.appIndexJs = path.resolve(__dirname, 'frontend/src/');
        paths.appSrc = path.resolve(__dirname, 'frontend');
        paths.app = path.resolve(__dirname, 'frontend');
        paths.publicPath = path.resolve(__dirname, 'frontend/');
        paths.public = path.resolve(__dirname, 'frontend/');
        return paths;
    },
}