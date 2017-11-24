module.exports = {
  plugins: [
    require('postcss-salad')({
      'browsers': ['last 3 versions'],
      'features': {
        'autoprefixer': false,
        'bem': {
          'shortcuts': {
            'component': 'b',
            'modifier': 'm',
            'descendent': 'e'
          },
          'separators': {
            'descendent': '__',
            'modifier': '--'
          }
        }
      }
    }),
    require('postcss-cssnext')({
      browsers: ['last 3 versions']
    })
  ]
}
