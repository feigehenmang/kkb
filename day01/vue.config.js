const path = require('path');
module.exports = {
    publicPath: '/test/',
    chainWebpack(config) {
        config.module
        .rule('svg')
        .exclude.add(path.resolve(__dirname, './src/icons'))
        // .use('file-loader')
        // .tap(options => {
        //     console.log(options);

        //     return options;
        // })
        config.module.rule('icon')
        .test(/\.svg$/)
        .include.add(path.resolve(__dirname, './src/icons')).end()
        .use('iconLoader')
        .loader('svg-sprite-loader').options({
            symbolId: 'icon-[name]'
        })
    }
}