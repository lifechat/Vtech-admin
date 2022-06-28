# 关于tree-sharking你有什么疑问？

- 当Javascript应用程序达到一定规模,有助于独立的代码模块。然而,当我们这样做,我们可以最终代码导入,并不是实际使用。tree-sharking的方法优化我们在代码，并消除最终文件实际上并没有使用的代码。

- 假设我们有一个实用程序文件,我们可能需要使用一些数学操作主要脚本。看下面code

我们导出了关于算数使用的4个方法
```javascript
export function add(a, b) {
    console.log("add");
    return a + b;
}

export function minus(a, b) {
    console.log("minus");
    return a - b;
}

export function multiply(a, b) {
    console.log("multiply");
    return a * b;
}

export function divide(a, b) {
    console.log("divide");
    return a / b;
}
```

- 可能在某些场景中，在我们的主要脚本,我们可能只导入并使用add()函数。

```javascript
import { add } from "./mathUtils";

add(1, 2);
```

- 在webpack中，假设我们使用一个工具来创建我们的包,我们将看到,所有从mathUtils功能。js文件包含在最后的包,即使我们引入并使用add()函数 将会编译在bundle.js中。

```javascript
/***/ "./src/mathUtils.js":
/*!**************************!*\
  !*** ./src/mathUtils.js ***!
  \**************************/
/*! exports provided: add, minus, multiply, divide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"minus\", function() { return minus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multiply\", function() { return multiply; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"divide\", function() { return divide; });\nfunction add(a, b) {\n    console.log(\"add\");\n    return a + b;\n}\n\nfunction minus(a, b) {\n    console.log(\"minus\");\n    return a - b;\n}\n\nfunction multiply(a, b) {\n    console.log(\"multiply\");\n    return a * b;\n}\n\nfunction divide(a, b) {\n    console.log(\"divide\");\n    return a / b;\n}\n\n\n//# sourceURL=webpack:///./src/mathUtils.js?");
/***/ })
```

- 启用了tree-sharking,只有imported和实际使用它最后的包。

## tree-sharking 是如何工作的

- 尽管1990年tree-sharking的概念就已经存在了,ES6模块的出现,tree-shaking才能在Javascript中ES6-style模块中起到作用。这是因为tree-sharking只能在**静态模块**当中进行工作。
ES6模块出现之前，我们已经CommonJS模块使用**require()** 语法。这些模块是“动态的”,这意味着我们根据条件在我们的代码可以导入新模块。**这也就是为什么在node 当中引入模块一般都是采用require但在vue or react 当中引入模块一般都是采用import导入 他们是有本质区别的** code-example:
```javascript
var myDynamicModule;
if (condition) {
    myDynamicModule = require("foo");
} else {
    myDynamicModule = require("bar");
}
```
- CommonJS的动态特性模块意味着tree-sharking不能被应用,因为它是不可能确定哪些模块实际运行之前需要的代码。

- 在ES6,介绍了新的语法模块,完全是静态的。使用导入语法,我们再也不能动态导入一个模块。

- 所以在一般开发者如果要开发一个依赖库都要生成不同模块化规范供使用者引入所需的代码工作场景当中。**CommonJs,AMD,CMD,ES6**

```javascript
if (condition) {
    import foo from "foo";
} else {
    import bar from "bar";
}

//以上代码是无法使用的
```
- 相反,我们必须在全局作用域当中,定义所有静态导入的模块进行使用。

```javascript
import foo from "foo";
import bar from "bar";

if (condition) {
    // 用foo 来进行做相应的工作
} else {
    // 用bar 来进行做相应的工作
}
```
- 这种新语法允许有效tree-sharking,从导入任何代码,可以确定不需要首次运行的代码

## 使用tree-sharking到底优化了什么？
 
 -Tree-shaking,至少是webpack对该功能的实现，在尽可能地消除未使用的代码方面相当出色。例如，那些已经导入但没有使用的导入被消除了。

 ```javascript
import { add, multiply } from "./mathUtils";

add(1, 2);
 ```
- 在上面的例子中，multiply()函数从未被使用，并将从最终的捆绑中删除。即使是从未被访问过的导入对象的特定属性也被删除。

```javascript
// demo.js
export const myInfo = {
    name: "Ire Aderinokun",
    birthday: "2 March"
}


// index.js
import { myInfo } from "./myInfo.js";

console.log(myInfo.name);
```
- 在上面的例子中，生日属性从未进入最后的捆绑，因为它从未被实际使用。

- 然而，tree-sharking并不能消除所有未使用的代码。关于什么被消除和什么没有被消除的细节超出了本文的范围，但应该注意的是，使用摇树并不能完全解决未使用代码的问题。

## 那么关于它的副作用呢
- 副作用是在导入时执行一些动作的代码，不一定与任何导出有关。副作用的一个好例子是Polyfill。Polyfills通常不提供在主脚本中使用的输出，而是添加到整个项目中。

- 
## 如何进行tree-sharking
- tree-sharking通常是通过代码实现打包机。例如,如果你正在使用webpack您可以简单地设置webpack.config生产模式。js配置文件,开启tree-sharking.

- tree-sharking无法自动判断哪些脚本是副作用，所以必须手动指定它们，我们可以看下方code

```javascript
module.exports = {
    ...,
    mode: "production",
    ...,
};
```

- 将某些文件标记为副作用,我们需要将它们添加到package.json文件当中。

```javascript
{
    ...,
    "sideEffects": [
        "./src/polyfill.js"
    ],
    ...,
}
```
想了解更多的信息关于如何使用webpack实现tree-sharking,去看看他们的[文档](https://webpack.js.org/guides/tree-shaking/)
