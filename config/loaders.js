module.exports = {
    loaders: [
        {
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        },
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015', 'stage-2']
            }
        },
        {
            test: /\.scss/,
            loader: 'style!css!sass'
        },
        {
            test: /\.json$/,
            loader: 'json-loader'
        },
        {
            test: /\.csv$/,
            loader: 'dsv-loader'
        },
        {

            test: /\.(png|jpg)$/, 
            loader: 'url-loader?limit=8192'
        }
    ]
}; 
