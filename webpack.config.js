const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/main.js',
        style: './src/style.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
