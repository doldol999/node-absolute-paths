const { entry, output, resolve, rules } = require('./default');

module.exports = ({
  mode: 'development',
  entry,
  output,
  module: {
    rules,
  },
  resolve,
})