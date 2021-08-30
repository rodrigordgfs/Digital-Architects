module.exports = {
    publicPath: '',

    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Digital Architects";
                return args;
            })
    },

    pwa: {
      name: 'Digital Architects',
      themeColor: '#F5F5F5'
    }
}