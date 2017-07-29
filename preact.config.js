// *
//  * Function that mutates original webpack config.
//  * Supports asynchronous changes when promise is returned.
//  *
//  * @param {object} config - original webpack config.
//  * @param {object} env - options passed to CLI.
//  * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
//  *
import GoogleFontsPlugin from 'google-fonts-webpack-plugin';
import CompressionPlugin from "compression-webpack-plugin";
import PurifyCSSPlugin from 'purifycss-webpack';
import path from 'path';
import glob from 'glob-all';

export default function (config, env, helpers) {
  config.plugins.push(
    new GoogleFontsPlugin({
      formats: ["woff2"],
      fonts: [
        { family: "Open Sans", variants: [ "300", "700"] }
      ]
    })
  )

  config.module.loaders.push(
    {
      test: /\.(gif|png|jpe?g|jpg|svg)$/i,
      loader: 'image-webpack-loader',
      query: {
        progressive: true,
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
  )

  if (env.production) {
    config.plugins.push(
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.(css|js|html)$/
      })
    )

    config.plugins.push(
      new PurifyCSSPlugin({
        // Give paths to parse for rules. These should be absolute!
        paths: glob.sync([
          path.join(__dirname, 'index.js'),
          path.join(__dirname, 'routes/**/index.js'),
          path.join(__dirname, 'components/**/index.js'),
        ]),
      })
    )
  }

  return config
}
