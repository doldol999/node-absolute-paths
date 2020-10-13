import path from 'path';

const entry = path.join(process.cwd(), 'src');

const output = {
  path: path.join(process.cwd(), 'dist'),
  filename: 'index.js',
};

const rules = [
  {
    test: /\.(ts)$/,
    exclude: /node_modules/,
    use: 'ts-loader',
  },
]

const resolve = {
  modules: [
    'node_modules',
    path.join(process.cwd(), 'src'),
  ],
  extensions: ['.ts', '.js'],
}

export default ({
  entry,
  output,
  module: {
    rules,
  },
  resolve,
})