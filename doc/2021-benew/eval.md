# eval 动态化执行语句

## 概述

  eval方法是javascript的全局方法，能够执行含有javascript代码的字符串，虽然eval方法带来强大的动态执行功能，但考虑其负面影响，建议少用，在特殊情况下可以使用eval方法动态改变代码的执行作用域来达到代码的灵活性


### 动态值，表达式和语句

```javascript
  console.log(typeof eval('true')) // boolean
  console.log(typeof eval("'9'")) // string
  console.log(typeof eval('8')) // number
```

**注意点：**
 
 - 如果参数code 含有一个表达式，则计算该表达式并返回该计算值

```javascript
    console.log(eval('1+1')); // 2
```
 - 如果参数code 含有一个或者多个javascript语句，则eval方法将执行这些语句

```javascript 
    console.log(eval('1+1')); // 2
    console.log(eval('8'))  // 单值表达式
    console.log(eval('8;')) // 单值语句
   //虽然它们语义不一样，但还是按照js的词法结构在解释器进行解析
```

 - 为了预防不可预知的错用,同时考虑到实现效率的问题。在ESv3 标准中,给eval加了禁制，不能将eval赋值给另一个属性，然后在代码里面灵活调用和禁止用户覆盖eval属性
 ```javascript
    // es3 中
    let e = eval;
    console.log(e('8')) //  Evalerror 异常
    // 目前
    let e = eval;
    console.log(e('8+9')); // 17
 ```
 - 如果最后一个语句有返回值，则eval则返回这个值
 - 如果参数code 没有返回任何值,则eval返回undefined
   在js中，除了空语句和命令语句之外，一般语句都会有返回值，返回值由执行最后一个子语句或表达式的值决定

```javascript
    let s = "for (let index = 0; index < 50; index++) { console.log(index);}"

    // 上面语句会执行 依次打印对应的index 0-49
    console.log(eval(s)) // undefined 说明eval总会将代码执行的值进行返回，如果没有就返回undefined
    // 
```
 - 如果参数code抛出异常,则eval会将异常传递给调用者。
```javascript
 try {
    let s = "for (let index = 0; index < 50; index++) { ;}"
    console.log(eval(s)) // undefined
   } catch (error) {
     console.log(error.message); // 返回错误信息
   }
```
 - 大部分字符串参数的javascript函数和方法都会接受其他的参数，在继续操作之前把参数强制转换成字符串,但eval方法比较特殊，code参数如果不是原始的字符串，则eval不做任何处理并返回原始值。当传递给eval原始字符串值时，不要传递字符串对象。
 例如:
 ```javascript
   let s = new String('1+2') // string 对象
   console.log(eval(s)); // 返回字符串“1+2”
   let s1 = "1+2"; // 原始的直接量
   console.log(eval(s1)) // 3
   console.log(typeof eval(s1)) // 返回为number类型
 ```

### 对象和函数直接量的歧义问题

### eval全局执行域及其兼容

### eval当前执行域
