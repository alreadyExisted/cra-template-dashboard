const { override, useEslintRc, addBabelPlugins, addWebpackAlias, addPostcssPlugins } = require('customize-cra')
const path = require('path')

module.exports = override(
  useEslintRc(),
  addBabelPlugins('react-require'),
  addPostcssPlugins([
    require('postcss-import')({
      path: [path.join(__dirname, './src/theme')]
    }),
    require('postcss-mixins')({
      mixinsDir: path.join(__dirname, './src/theme/mixins')
    }),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true
      },
      importFrom: path.join(__dirname, './src/theme/vars.css')
    }),
    require('postcss-inline-svg')(),
    require('postcss-svgo')()
  ]),
  addWebpackAlias({
    ['@app']: path.resolve(__dirname, 'src')
  })
)
