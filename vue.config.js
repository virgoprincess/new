module.exports = {
  devServer:{
    https:true,
    port:8080,
  },
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/_variables.scss";
        `
      }
    }
  },
  publicPath:'/'
}
