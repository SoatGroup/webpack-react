var path = require('path');
var config = {
    entry: [path.resolve(__dirname, 'src/main.jsx')],
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: 'bundle.js',
        library: 'customLib',
        libraryTarget: 'var'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    externals: {
        // exclude react
        "react": "React",
        "react-dom": "ReactDOM"
    },
};

module.exports = config;
