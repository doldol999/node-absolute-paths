import { entry, output, resolve, rules } from './default';

module.exports = ({
  mode: 'development',
  entry,
  output,
  module: {
    rules,
  },
  resolve,
})