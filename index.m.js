'use strict'

import postcss from 'postcss'
import CleanCss from 'clean-css'

const initializer = (opts = {}) => {
  const cleancss = new CleanCss(opts)

  return {
    postcssPlugin: 'clean',
    Once(css, { result }) {
      return new Promise((resolve, reject) => {
        cleancss.minify(css.toString(), (err, min) => {
          if (err) {
            return reject(new Error(err.join('\n')))
          }

          for (let w of min.warnings) {
            result.warn(w)
          }

          result.root = postcss.parse(min.styles)
          resolve()
        })
      })
    }
  }
}
initializer.postcss = true

export default initializer
