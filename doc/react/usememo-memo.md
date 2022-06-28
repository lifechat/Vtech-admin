React.memo() vs  useMemo()
# React.memo()与useMemo()之间有什么主要区别？

    性能优化是一只web开发中的一个重要讨论点。对于react团队同样如此，为了实现加速组件的渲染速度，采用“备忘录”的方式。
    所以这个时候就React.memo()和 useMemo 钩子 就为了解决这个问题产生了。

    本文将比较和对比React.memo和useMemo()，同时讨论它们的用例。

##  React.memo()和useMemo()的必要性

    理解我们为什么需要React.memo()和useMemo()的最好方法是看看React是如何在没有记忆化的情况下重新呈现组件的。
    为此，让我们考虑一个有两个React组件的简单例子。第一个组件是父组件。它有一个按钮，可以增加计数变量的值。

```typescript
import Child from './Child'
import React, { useState } from 'react'

export default function Parent() {
  const [count, setCount] = useState<number>(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  console.log('prent')

  return (
    <div>
      <button onClick={handleClick}>Increase Count</button>
      <h2>{count}</h2>
      <Child name={'Child COmponnt'} />
    </div>
  )
}
```
    第二个组件是子组件，它显示从父组件传来的名字。

```typescript
import React, { Component } from 'react'

export default function Child(props) {
  console.log('Child Render')
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  )
}
```

    一旦用户点击 "增加计数 "按钮，计数就会增加，这将导致父组件的重新渲染.
    在这里，count变量的值变化并不影响props传递到子变量，子组件也不应该重新渲染。
    在这里如果你业务代码逐渐开始多了，然后里面刚刚好采用了这种方式去开发对应的业务代码，页面的性能可想而知，会根据代码的增量而成反比。




从上述所见，不难看出每当父组件被重新渲染时，子组件的渲染方法也被调用。这将触发子组件的虚拟DOM与之前的虚拟DOM状态做差异检查。
但是，真实的DOM不会改变，因为子组件没有变化。虽然真实的DOM没有变化，但与虚拟的DOM进行比较需要一些时间才能看到相同的内容。因此，这种行为会导致严重的性能问题，并增加大规模应用的加载时间。

这就是为什么我们需要使用React.memo()和useMemo()来优化React组件的渲染过程。


## 什么是React.memo()?
React.memo()是在React 16.6中引入的，以避免功能组件中不必要的重新渲染。它是一个高阶组件，接受另一个组件的props。只有当props发生变化时，它才会渲染该组件。
现在让我们再次研究上述例子，了解React.memo()是如何工作的。但是，这一次，我们需要用React.memo()来包装子组件。

```typescript
import React, { Component, memo } from 'react'

function Child(props) {
  console.log('Child Render')
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  )
}

export default memo(Child)
```


当我们点击增加计数按钮,子组件不会重现的,应用程序将重用前面呈现输出。



重要的是要记住，React.memo()将只检查props的改变。
如果功能组件有useState、useReducer或useContext等Hooks,它仍然会在状态或上下文发生变化时强制重新渲染。

此外，React.memo()将浅层地比较props对象中的复杂对象。对于特定业务场景可能需要类似shouldComponentUpdate这样的 API，你也可以传递一个自定义的比较函数作为第二个参数，基本用法在上一案例。高阶用法如下所示:
```typescript
export function Child(props) { 
  /* render using props */
 }
function areSame(prevProps, nextProps) { 
    /* return true if passing nextProps to render would 
    return the same result as passing prevProps to render, otherwise return false */
  return prevProps === nextProps;

 }

export default React.memo(Child, areSame);
```

## 我们应该在什么时候使用React.memo()？
在以下情况下，最好使用React.memo()。

* 组件的渲染过于频繁，拖慢了应用程序
* 组件渲染的成本很高（当加载时间超过100ms）
* 组件不断为同一组props重新渲染
然而，在轻量级组件中使用React.memo()会导致性能开销和意外的错误。
因此，在使用React.memo()时，我们还应该考虑到组件的复杂性

## 什么是useMemo()?

    useMemo()是开发者中最常用的React Hooks之一。它接受一个函数和一个依赖关系数组作为输入，并将该函数返回的值备忘化。
    useMemo()的特点是，只有当其中一个依赖关系发生变化时，它才会重新计算备忘的值。这种优化有助于避免在每次渲染时进行昂贵的计算。
    现在写一个例子，了解useMemo()是如何工作的：

```typescript
import Child from './Child'
import React, { useState, useRef, useMemo } from 'react'

export default function Parent() {
  const [count, setCount] = useState<number>(0)
  const [times, setTimes] = useState<number>(0)
  const handleClick = () => {
    setCount(count + 1)
  }

  const useMemoRef = useRef(0)
  const incrementUseMemoRef = () => useMemoRef.current++
  const memoizedValue = useMemo(() => incrementUseMemoRef(), [times])

  console.log('prent render')

  return (
    <div>
      <button onClick={() => setTimes(times + 1)}>Force Child Render</button>
      <br />
      <br />
      <br />
      <button onClick={handleClick}>Increase Count</button>
      <Child memoizedValue={memoizedValue} />
    </div>
  )
}
```
这表明在父组件中，我们正在使用useRef()Hook来跟踪子组件重新渲染的次数。useMemo()Hook调用了incrementUseMemoRef函数，由useMemo() Hook返回的值然后被存储在memoizedValue变量中。每次依赖关系更新时，它都会将我们的useMemoRef.current的值增加一个。你会看到，如果你点击增加计数按钮，memoizedValue并没有得到更新。
```typescript
import React, { Component, memo } from 'react'

function Child({ memoizedValue }) {
  console.log('Child Render')
  return (
    <div>
      <h2>Child Component</h2>
      <p>
        I will only re-render when you click <b>Force Child Render.</b>
      </p>
    </div>
  )
}
export default memo(Child)
```
## 什么时候使用useMemo？
**在使用useMemo()钩子之前，你需要确保几点:**
1. 你已经分析了这个组件，并验证了它是否在每次渲染时都会计算一个昂贵的值。
2. 因为它是在渲染时执行的，你的useMemo()钩子没有副作用，所有的副作用都在useEffect()钩子里。
3. 你不会违反任何React Hooks规则和标准。

使用useMemo()的理想情况是当你有计算密集型的函数时。useMemo()函数可以记忆你的函数返回的值，并在不同的渲染中保持它的内存。在大多数情况下，它返回一个你不能在你的React组件之外运行的结果。

这类似于将一个函数的响应保存到一个变量中，然后从变量中引用响应值，而不必每次都执行该函数。



## 你应该使用React.memo()还是useMemo()？

在React.memo()和useMemo()之间做出选择应该是很简单的。现在你对它们都有了充分的了解。

> 1.使用React.memo来记忆整个组件。
> 2.使用useMemo在一个功能组件中对一个值进行备忘。