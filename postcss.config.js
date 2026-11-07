// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    'postcss-preset-env': {
      features: {
        'nesting-rules': true,
        // Keep logical properties: flattening them assumes LTR and mirrors the layout in RTL.
        'logical-properties-and-values': false,
      },
    },
  }
}