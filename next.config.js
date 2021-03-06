const withImages = require('next-images')
module.exports = withImages()
module.exports = {
    images: {
        disableStaticImages: true
    },
    webpack: (config, options) => {
        config.module.rules.push(
            {
                test: /\.(jpe?g|png|gif|woff|woff2|otf|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            name : 'assets/img/[name].[ext]'
                        }
                    }
                ]
            }
        )
        return config
    },
}