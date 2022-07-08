const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'production',
    entry:{
        index:'./src/main.js',
        style:'./src/style.js'
    },
    output:{
        path:path.resolve(__dirname, 'public/js'),
        clean:true,
        assetModuleFilename:'[name][ext]'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            // {
            //     test: /\.pdf$/,
            //     use: 'file-loader?name=[path][name].[ext]',
            // },
            {
                test:/\.(png|svg|jpg|jpeg|gif|pdf)$/i,
                type:'asset/resource'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title:'webpack App',
        filename:'index.html',
        template:'src/index.html'
    })],
}