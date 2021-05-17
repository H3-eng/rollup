# rollup介绍
rollup是一个Js模块打包器，可以将小块代码编译成大块复杂的代码。现在已经有很多类库都在使用 rollup 进行打包了，比如：react, vue, preact, three.js,moment, d3 等。

# rollup特性
打包js文件的时，如果发现无用变量，会将其删掉。
可以将js中的代码，编译成想要的格式
# webpack特性
代码拆分
静态资源导入（如 js、css、图片、字体等
# 与webpack的对比
rollup：小巧而专注
webpack：强大而齐全
结论：对于应用使用 webpack，对于类库使用 Rollup


# 目录结构
├── dist # 编译结果
├── example # HTML引用例子
│   └── index.html
├── package.json
└── src # 源码
    └── index.js


# typescript
typescript：ts解析器
@typescript-eslint/parser：eslint ts解析器
rollup-plugin-typescript2：ts转换器