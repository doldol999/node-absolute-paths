const { entry, output, resolve, rules } = require('./default');

module.exports = ({
  mode: 'production',
  entry,
  output,
  module: {
    rules,
  },
  resolve,
})