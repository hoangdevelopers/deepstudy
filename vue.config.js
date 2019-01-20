module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule('assets')
      .test(/public(\/|\\.(png|xml|ac3|m4a|oog|mp3|css|eot|svg|ttf|woff|fnt|frag))/)
      .use('javascript/auto')
        .loader('file-loader?name=assets/[hash].[ext]')
        .end()
  }
}
