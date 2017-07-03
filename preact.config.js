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
    new GoogleFontsPlugin({
      fonts: [
        { family: "Open Sans", variants: [ "400", "300", "700", "800", "400italic"] }
      ]
      /* ...options */
    })]
  )

  return config
}
