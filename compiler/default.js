import path from 'path';

export const entry = path.join(process.cwd(), 'src');

export const output = {
  path: path.join(process.cwd(), 'dist'),
  filename: 'index.js',
};

export const rules = [
  {
    test: /\.(ts)$/,
    exclude: /node_modules/,
    use: 'ts-loader',
  },
]

export const resolve = {
  modules: [
    'node_modules',
    path.join(process.cwd(), 'src'),
  ],
  extensions: ['.ts', '.js'],
}
