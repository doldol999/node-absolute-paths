import { entry, output, resolve, rules } from './default';

module.exports = ({
  mode: 'production',
  entry,
  output,
  module: {
    rules,
  },
  resolve,
})