module.exports = {
    entry:  {
        main: "./app/assets/views/js/main.js"
    },
    output: {
        path: "./app/temp/views/js",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
            loader: 'babel',
            query: {
                presets: ['es2015']
            },
            test:/\.js$/,
            exclude: /node_modules/
            }
        ]
    }
}

/*
module.exports = {
    entry:  {
        perfmatters: "./app/assets/js/perfmatters.js"
    },
    output: {
        path: "./app/temp/js",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
            loader: 'babel',
            query: {
                presets: ['es2015']
            },
            test:/\.js$/,
            exclude: /node_modules/
            }
        ]
    }
}

*/