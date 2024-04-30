module.exports ={
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          module: {
            rules: [
              {
                test: /\.s[ac]ss$/i,
                use: [
                  'vue-style-loader',
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
            ],
          },
        },
      },
    },
  },
}
