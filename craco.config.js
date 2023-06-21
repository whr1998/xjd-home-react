const path = require('path')
const cracoPluginStyleResourcesLoader = require('craco-plugin-stylus-resources-loader')

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routes': path.resolve(__dirname, 'src/routes'),
    }
  },

   // plugins配置
   plugins: [
    // 配置全局scss
    {
      plugin: cracoPluginStyleResourcesLoader,
      options: {
        patterns: [
          path.join(__dirname, 'src/styles/_handleThemes.scss'),
          path.join(__dirname, 'src/styles/_mixin.scss'),
          path.join(__dirname, 'src/styles/_variable.scss'),
        ],
        /*
            Please enter supported CSS processor type
            1. if u use css processor，please type css string
            2. if u use less processor，please type less string
            3. if u use sass or scss processor，please type sass or scss string，Choose one of the two
            4. if u use stylus processor，please type stylus string
        */
        styleType: 'sass',
      },
    },
  ],
}