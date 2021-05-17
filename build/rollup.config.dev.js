
const path = require('path')
const resolve = p => path.resolve(__dirname, '../', p)
const nodeResolve = require('rollup-plugin-node-resolve');
module.exports = {
  input: resolve('index.js'), // 入口
  output: { // 出口
    file: resolve('dist/bundle.js'),
    format: 'umd',
    name: 'bundle'
  },
  plugins: [
    nodeResolve()
  ]
}