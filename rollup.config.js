import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { format } from 'path';
export default{
    input:'src/index.js', //入口
    output: {
      file: 'bundle.js',
      format: 'cjs'
    },
    format:'umd', //兼容 规范 script导入 amd commonjs
    plugins:[
        resolve(),
        babel({
            exclude:'node_modules/**'
        })
    ],
    dest:'build/bundle.js'
}