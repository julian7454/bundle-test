Webpack vs Rollup
===

---

## Tree-Shaking

- 原理：
ES6 module 特性，可以做靜態分析，不需要實際執行才知道是否有被使用。

----

### 打包可能影響 Tree-Shaking 的變因
- side effect: 函式內有可能有想外部變數的行為。
- 透過 babel, uglify 等套件編譯過的程式碼，可能有 side effect(class 會編成 Object.defineProperty)，或是無法判斷有沒有 side effect(uglify)。

- [你的Tree-Shaking并没什么卵用](https://juejin.im/post/5a5652d8f265da3e497ff3de)

----

### 實際測試
#### (bundle tool + babel-preset-env + uglify)
- webpack 不能對 class 做 Tree-Shaking？
在沒有副作用的情形下，class 與 import 都能做 Tree-Shaking。

- 能否根據是否有副作用做 Tree-Shaking？
使用閉包的情況，rollup 仍可根據實際使用情形作 Tree-Shaking， webpack 則無。

----

``` javascript
var V8Engine = (function () {
  function V8Engine () {}
  V8Engine.prototype.toString = function () { return 'V8' }
  return V8Engine
}())
var V6Engine = (function () {
  function V6Engine () {}
  V6Engine.prototype = V8Engine.prototype // <---- side effect
  V6Engine.prototype.toString = function () { return 'V6' }
  return V6Engine
}())
console.log(new V8Engine().toString())
// V6
```

---

## Code Splitting 

- webpack 較佳，entry 可以是多個檔案。
- 可用非同步載入
- SplitChunksPlugin 可依據檔案大小(minSize)，module 引用次數(minChunks)，同步/非同步(chunks)，priority(優先級)等自訂優化決定打包檔案的邏輯。

---

## 比較
- rollup
    - bundle 的程式碼處理較少，幾乎沒有多餘程式碼
    - 沒有 Hot Module Replacement
    - 主要針對 es module, cjs, umd 等格式需透過 rollup-plugin-commonjs， 且可能會有問題。
    - Tree-Shaking 的效果更佳？

----

- webpack
    - Commons Chunk, Code Splitting 等可以做最大程度的優化。
    - webpack 對 es 以外的格式問題較少。


---

## 參考資料
- [webpack - Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
- [webpack - Code Splitting](https://webpack.js.org/guides/code-splitting/)
- [rollup](https://www.rollupjs.com/guide/en)
- [你的Tree-Shaking并没什么卵用](https://juejin.im/post/5a5652d8f265da3e497ff3de)
- [Webpack4之SplitChunksPlugin](https://juejin.im/post/5af15e895188256715479a9a)
