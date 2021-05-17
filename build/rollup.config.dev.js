
const path = require('path')
const resolve = p => path.resolve(__dirname, '../', p)
const nodeResolve = require('rollup-plugin-node-resolve');
const ts = require('rollup-plugin-typescript2')
module.exports = {
  input: resolve('index.ts'), // 入口
  output: { // 出口
    file: resolve('dist/bundle.js'),
    format: 'umd',
    name: 'bundle'
  },
  plugins: [
    nodeResolve(),
    ts()
  ]
}