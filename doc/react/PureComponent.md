# 关于React中Component和PureComponent 你应该了解的

**任何技术和产品产生的时候，都应该了解当时所处的场景，以及为什么会需要这个东西，他是来解决当下业务线那些弊端，又或者优化了什么，否则它的产生将毫无意义可言。**

关于源码是处于ReactBaseClasses这个文件:

```javascript
    import {Component, PureComponent} from './ReactBaseClasses';
```

进入一一剖析里面所含的技术要点，以及为什么会需要这个东西，以及使用场景，

# Component

```typescript
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/*
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function(partialState, callback) {
  if (
    typeof partialState !== 'object' &&
    typeof partialState !== 'function' &&
    partialState != null
  ) {
    throw new Error(
      'setState(...): takes an object of state variables to update or a ' +
        'function which returns an object of state variables.',
    );
  }
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function(callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
```
 上述源码可以得知:
> 1. 创建了一个 Component的构造函数，并在其内部定义了 props context refs updater四个私有属性。
> 2. 接着在其原型对象上定义了 isReactComponent对象，setState方法，forceUpdate方法
> 3. 然后，我们在项目中使用es6的class类的继承来创建了react组件，如下：
```typescript
import React, { Component, memo } from 'react'

class Test extends Component<any, any> {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this)
    return <div>ReadcowPuch</div>
  }
}

export default ReadcowPuch
```
> 4. 因为我们在创建自定义的组件时继承了 react.Component， 所以 我们可以在我们所创建的组件中使用 Component构造函数 原型对象上的方法和属性。(f12)打开开发者就能找到对应的属性和方法. 

# PureComponent 
    当使用component时，父组件的state或prop更新时，无论子组件的state、prop是否更新，都会触发子组件的更新，这会形成很多没必要的render，浪费很多性能；
    pureComponent的优点在于：pureComponent在shouldComponentUpdate只进行浅层的比较，只要外层对象没变化，就不会触发render,减少了不必要的render，当遇到复杂数据结构时，可以将一个组件拆分成多个pureComponent，以这种方式来实现复杂数据结构，以期达到节省不必要渲染的目的，
    如：表单、复杂列表、文本域等情况；

    不需要开发者使用shouldComponentUpdate就可使用简单的判断来提升性能；

    由于进行的是浅比较，可能由于深层的数据不一致导致而产生错误的否定判断，从而导致页面得不到更新；

    主要在于pureComponent可以减少不必要的render，从而提高了性能，另外就是，不需要再手写shouldComponentUpdate里面的代码，从而节省了代码量；

    当组件更新时，pureComponent的shouldComponentUpdate函数里对props和state做了一个浅对比，如果组件的state和prop都没有发生变化，就不会触发render方法，省去了virtual DOM的diff和重新生成的过程，从而提升了性能；也正是因为是浅对比，所以不适合使用在含有多层嵌套对象的state和prop中。
```typescript
function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

const pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

export {Component, PureComponent};
```
 从上面源码,我们可以看到:
  **const pureComponentPrototype = (PureComponent.prototype = new ComponentDummy()) 此处没有直接继承Component，是为了避免继承 Component 的Constructor方法。目的是为了 减少一些内存的使用。**
  **Object.assign(pureComponentPrototype, Component.prototype)此处做了优化 把 Component.prototype属性浅拷贝到pureComponentPrototype上 防止原型连拉长 导致方法的多层寻找 减少查询次数**
  **最后增加了 isPureReactComponent 属性，用来区分Component组件还是PureComponent**

  关于这里的**assign**方法，react 团队进行了单独封装成一个js文件，但本质还是调用Object.assign方法，
  
  在一个组件从创建到展现到游览器，途中是要进行很多步骤，dom tree的渲染，css 等等的加载过程，在用**PureComponent**创建对应的组件，就是来优化组件，通过减少不必要的更新，进而提升性能。其每次更新时会自动的对更新前后的props和state进行一个简单的对比，来决定是否进行更新。进行的是浅比较。
> 1.**浅比较**也称引用相等，在javascript中， ===是作浅比较,只检查左右两边是否是同一个对象的引用,作为值类型，和引用类型地址值之间的比较。来判定是否有对等关系。
> 2.**深比较**也称原值相等，深比较是指检查两个对象的所有属性是否都相等,深比较需要以递归的方式遍历两个对象的所有属性，操作比较耗时，深比较不管这两个对象是不是同一对象的引用
```typescript
type shallowEqual = (objA:any,objB:any) => boolean; // 浅比较

type is = (a:any,b:any) => boolean; // type 声明函数约束

type deepEqual = (objA:any,objB:any) => boolean; // 深比较

const is:is = (a:any,b:any) => {
    return (a === b && (a !==0 || 1/a === 1/b)) || (a !== b && a !== b);
}
//浅比较
const shallowEqual:shallowEqual = (objA,objB) =>{
    
    if(is(objA,objB)){
        return true;
    }

    if(
        typeof objA !== 'object' ||  objA === null ||
        typeof objB !== 'object' ||  objB === null 
    ){
        return false;
    }

    const keysA = Object.keys(objA) // 获取key
    const keysB = Object.keys(objB) 

    if(keysA.length !== keysB.length){
        return false;
    }

    for (let i = 0; i < keysA.length; i++) {
        const currentKey = keysA[i];
        if(
            !Object.prototype.hasOwnProperty.call(objB,currentKey) ||
            !is(objA[currentKey],objB[currentKey])
        ){
            return false;
        }
    }

    return true;
}

// 深比较
const deepEqual:deepEqual = (objA,objB) => {
    // 判断是否NaN 类型
    if(Number.isNaN(objA) && Number.isNaN(objB)) return true;

    // 是否为对象
    let IsObj = (val:any) => typeof val === 'object' && val !== null;

    if(!IsObj(objA) || !IsObj(objB)) return objA === objB;


    if(objA === objB) return true;

  // 执行到这objA,objB 都是对象，为了区分 {} 和 []，如果没有此判断，会导致 deepEquals({}, []) 返回 true 
    let isEmptyObj = (Array.isArray(objA) && !Array.isArray(objB) || Array.isArray(objB) && !Array.isArray(objA)) ;

    if(isEmptyObj) return false;

    // 获取键的长度，长度不等则不同，对数据进行遍历进行对比
  if (Object.keys(objA).length !== Object.keys(objB).length) return false;
  for (let key in objA) {
    if (objA.hasOwnProperty(key)) {
      const isEqual = deepEqual(objA[key], objB[key])
      if (!isEqual)  return isEqual;
    }
  }

  return true;
}

console.log(deepEqual(0, 0));	// true
console.log(deepEqual('str', 'str'));	// true
console.log(deepEqual(true, true));	// true
console.log(deepEqual(undefined, undefined));	// true
console.log(deepEqual(null, null));	// true
console.log(deepEqual({}, {}));	// true
console.log(deepEqual({val: 1}, {val: 1}));	// true
console.log(deepEqual([1,2,3], [1,2,3]));	// true
console.log(deepEqual([1,2,{a: 1}], [1,2,{a: 1}]));	// true
```
> 3.PureComponent的浅比较源码中主要用的是 shallowEqual，而在该方法内部主要是利用了 Object.is() [code](https://github.com/facebook/react/blob/main/packages/shared/shallowEqual.js)


# 关于源码当中使用的Object.is方法

以下是ECMAScript® 2023 Language Specification 对于该方法的一些概述：
<strong>
20.1.2.14 Object.is ( value1, value2 ) <br/>
When the is function is called with arguments value1 and value2, the following steps are taken:<br/>
 Return SameValue(value1, value2).
</strong>

对于源码的一些改动（ts写法)：
```typescript
    type is = (a:any,b:any) => boolean; // type 声明函数约束

    const is:is = (a:any,b:any) => {
        return (a === b && (a !==0 || 1/a === 1/b)) || (a !== b && a !== b);
    }

    const ObjectIs : (x:any,y:any) => boolean  = typeof Object.is === 'function' ? Object.is : is;

```

注意点tips:
```javascript
// Case 1: Evaluation result is the same as using ===
Object.is(25, 25);                // true
Object.is('foo', 'foo');          // true
Object.is('foo', 'bar');          // false
Object.is(null, null);            // true
Object.is(undefined, undefined);  // true
Object.is(window, window);        // true
Object.is([], []);                // false
var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);              // true
Object.is(foo, bar);              // false
// Case 2: Signed zero
Object.is(0, -0);                 // false
Object.is(+0, -0);                // false
Object.is(-0, -0);                // true
Object.is(0n, -0n);               // true
// Case 3: NaN
Object.is(NaN, 0/0);              // true
Object.is(NaN, Number.NaN)        // true
```


[源码链接地址](https://github.com/facebook/react/blob/main/packages/react/src/React.js)
