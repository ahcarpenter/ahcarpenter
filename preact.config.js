// *
//  * Function that mutates original webpack config.
//  * Supports asynchronous changes when promise is returned.
//  *
//  * @param {object} config - original webpack config.
//  * @param {object} env - options passed to CLI.
//  * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
//  *
import GoogleFontsPlugin from 'google-fonts-webpack-plugin';

export default function (config, env, helpers) {
  config.plugins = config.plugins.concat([
    // new AutoDllPlugin({
    //   inject: true, // will inject the DLL bundles to index.html
    //   context: __dirname,
    //   filename: '[name]_[hash].js',
    //   entry: {
    //     vendor: "/node_modules"
    //   }
    // }),
    new GoogleFontsPlugin({
      formats: ["woff2"],
      fonts: [
        { family: "Open Sans", variants: [ "300", "700"] }
      ]
    })
  ])

  config.module.loaders = config.module.loaders.concat([
    {
      test: /\.(gif|png|jpe?g|jpg|svg)$/i,
      loader: 'image-webpack-loader',
      query: {
        progressive: true,
        mozjpeg: {
          quality: 65
        },
        svgo:{
          plugins: [
            {
              removeViewBox: false
            },
            {
              removeEmptyAttrs: false
            }
          ]
        },
        gifsicle: {
          interlaced: true,
          optimizationLevel: 3
        }
      }
    }
  ])
}



