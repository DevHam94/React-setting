const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devServer: {
        compress: true,
        port: 9999.
    },
        
    module: {
        rules: [
            {
                test: /\.js$/, // 정규식으로 
                exclude: /node_modules/, // 정규식으로 특정한 폴더를 제외시킨다. 
                use: {
                    loader: 'babel-loader',
                    optoins: {
                        presets: ["@babel/presemt-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: '2.3 setup webpack & babel',
            template: 'index.html'
})
    ]
}
