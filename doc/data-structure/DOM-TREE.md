# 关于Tree数据结构，你了解多少呢？

这一篇会介绍关于数据结构Tree跟运用在前端的那边(虽然我相信读这篇的人肯定会很少


## 为什么会写这篇?
数据结构实在太多种了.大致上分为Linear(Array、Linked List 、Stack、Queue..) 跟 Non-Linear (Tree、Graphs…)，自己也是从零开始学习算法/数据结构，所以先跳过看起來很难而且也不知道用在前端场景的，Non-Linear data structure，在面试过程当中还是被问到过这系列问题!

面试官: 请问DOM是那种数据结构
我: 你是在问dom tree 嘛？
面試官: 答对了，就是Tree（没想到这么容易)
面試官: 那 DOM Tree 搜寻的时间复杂度是什么?
我: emmm …..

**面完之后感悟**
原來我每天都在碰的DOM，就是 Tree数据结构! 那看來一定要來剖析一下Tree这个数据结构了！

## 什麼是 Tree?

<<<<<<< Updated upstream
![Alt](https://github.com/lifechat/Vtech-admin/blob/main/doc/docImg/1.jpeg?raw=true)

树(Tree)是一种无顺序的资数据结构，方便快速找数据。为什么会叫Tree,因为这种数据结构的确像
极了倒过来的树了。在我们平时应用当中也经常能看到Tree的应用，例如web sitemap，一些计算机竞赛，族谱等等。

在开始介绍之前，认识一下相关名词。

**树节点(root)**: 就是最上面的节点(node)。每个tree只会有一个root
**子树(child tree)**: 由节点(node)和其后代构成。
**子节点(child node)**:有父节点的节点，所以基本上除了root都是
**叶节点或称外部节点（leaf)**: 没有子节点的节点
**节点深度(depth)**:祖先节点数量.以下图来说body depth 就是 0， img depth 是 2
**树的高度(height)**:最大深度到第几层.以下图來說 body height 就是 2， img height 是 0

下图示意用，所以就列代表而已(例如 child tree 应该有三个)

![Alt](https://github.com/lifechat/Vtech-admin/blob/main/doc/docImg/2.jpeg?raw=true)

若把其中一个node拿來看，他會
- 包括key
- 值指向的子代

![Alt](https://github.com/lifechat/Vtech-admin/blob/main/doc/docImg/9.jpeg?raw=true)
```javascript
=======
![Alt](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hdmF0YXIuY3Nkbi5uZXQvNy83L0IvMV9yYWxmX2h4MTYzY29tLmpwZw#pic_center)
樹（Tree）是一種無順序的資料結構，方便快速找資料。為什麼會叫 Tree，因為這種資料結構的確像極倒過來的樹．在生活中也常看到 Tree 的應用，例如 web sitemap、淘汰賽比賽圖、族譜等。

在開始介紹之前，先來認識一下相關專有名詞

樹根結點 (root): 就是最上面的结點 (node)。每個 tree 只會有一個 root
子樹 (child tree): 由结點 (node) 和其後代構成
子结點（child node): 有父结點的结點，所以基本上除了 root 都是
葉结點或稱外部结點（leaf): 沒有子结點的結點
结點深度（depth): 祖先結點數量。以下圖來說 body depth 就是 0， img depth 是 2
樹的高度（height): 最大深度到第幾層。以下圖來說 body height 就是 2， img height 是 0
下圖示意用，所以就列代表而已( 例如 child tree 應該有三個)


若把其中一個 node 拿來看，他會包括

key 值
指向的子代

>>>>>>> Stashed changes
class Tree {
    constructor(key){
        this.key = key;
        this.descendents = [];
    }    
}
<<<<<<< Updated upstream
```
## Binary Search Tree

Tree其实有很多种类型，例如红黑树、二元树、二元搜索树等等。DOM是一般的树类型，而这边也介绍一下最容易入门的二元搜索树(Binary Search Tree)

二元搜索树，Binary Search Tree 是二元树(Binary Tree) 的一种，他的演算法可以高效的插入、寻找、删除节点，是很常见的数据结构之一。

规则是每个node 节点下面最多两个child node

一个是左子节点，放比父节点小的值
一个是由子节点，放比父节点大的值

![Alt](https://github.com/lifechat/Vtech-admin/blob/main/doc/docImg/4.jpeg?raw=true)

通常一个 Binary Search Tree 会有以下方法 （不會把每個方法的code打出來，只是想要介紹概念）

```javascript
=======
Binary Search Tree
Tree 其實非常多種類型，例如紅黑樹、二元樹、二元搜尋樹等等。DOM 是一般的樹類型，而這邊也介紹一下最容易入門的二元搜尋樹 (Binary Search Tree)

二元搜尋樹 Binary Search Tree 是二元樹 (Binary Tree) 的一種，他的演算法可以高效的插入、尋找、刪除結點，是很常見的資料結構之一。

規則是每個 node 下面最多兩個 child node

一個是左子結點，放比父結點小的值
一個是右子結點，放比父結點大的值

通常一個 Binary Search Tree 會有以下這些方法 （這邊不會真正把每個方法的程式碼打出來，只是想要介紹概念）

>>>>>>> Stashed changes
class BinarySearchTree {
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }    
    let root = null;
    // Method
    // 插入 Key 鍵
    insert(key){}
    // 找是否有這個 Key 找到 return true, 沒找到 return false
    search(key){}
    // 透過中序遍歷所有結點
    inOrderTraverse(){}
    // 透過先序遍歷所有結點
    preOrderTraverse = function() {};
    // 透過後序遍歷所有結點
    postOrderTraverse = function() {};
    // 回傳樹中最小值/鍵
    min = function() {};
    // 回傳樹中最大值/鍵
    max = function() {};
    // 從樹中移除某個鍵
    remove = function(key) {};
}
<<<<<<< Updated upstream
```

**node**

Binary Search Tree 的子結點只會最多兩個 (left and right)

```javascript
    /* 建立二元樹 Node 類別，會有
    - 一個存放資料的 key(鍵) 
    - 指向左子結點指標
    - 指向右子結點指標
    */
=======
node
Binary Search Tree 的子結點只會最多兩個 (left and right)

/* 建立二元樹 Node 類別，會有
 - 一個存放資料的 key(鍵) 
 - 指向左子結點指標
 - 指向右子結點指標
*/
>>>>>>> Stashed changes
constructor(key){
    this.key = key;
    this.left = null;
    this.right = null;
}
<<<<<<< Updated upstream
```
![Alt](https://github.com/lifechat/Vtech-admin/blob/main/doc/docImg/3.jpeg?raw=true)
**insert (key)**

根据节点开始比较

    若 < parent node 则从 left child 再继续比
    若 > parent node 则从 right child 再继续比
以新节点 19 來说．总共比了三次

    19 < 50 所以往 "左边" 子节点继续比較
    19 > 17 所以往 "右边" 继续比較
    19 < 23 最后放在 "左边"

看图比较清楚，最后会新增在23 node 下面的“右边”子节点

![Alt](https://github.com/lifechat/Vtech-admin/blob/main/doc/docImg/5.jpeg?raw=true)

**Min / Max**
Binary Search Tree 最大的值就一定在最右邊，而最小值一定在最左邊
![Alt](https://github.com/lifechat/Vtech-admin/blob/main/doc/docImg/6.jpeg?raw=true)

**BFS vs. DFS**
- BFS: Breadth-First Search 广度优先搜寻
- DFS: Depth-first Search 深度优先搜寻
  这也是面试常被问到的概念之一，直接看图会比较好理解怎么运作的

![Alt](https://github.com/lifechat/Vtech-admin/blob/main/doc/docImg/7.gif?raw=true)

<!-- 允許我先客製 HTML tag 比較好解釋 -->
```html
=======

insert (key)
根結點開始比較

若 < parent node 則從 left child 再繼續比
若 > parent node 則從 right child 再繼續比
以新結點 19 來說．總共比了三次

19 < 50 所以往 "左邊" 子結點繼續比較
19 > 17 所以往 "右邊" 繼續比較
19 < 23 最後放在 "左邊"
看圖比較清楚，最後會新增在 23 node 下面的”右邊”子結點


Min / Max
Binary Search Tree 最大的值就一定在最右邊，而最小值一定在最左邊


BFS vs. DFS
BFS: Breadth-First Search 廣度優先搜尋
DFS: Depth-first Search 深度優先搜尋
這也是面試常被考概念之一，直接看圖比較好理解怎麼運作


<!-- 允許我先客製 HTML tag 比較好解釋 -->
>>>>>>> Stashed changes
<content>
    <sidebar>
        <menu></menu>
    </sidebar>
</content>
<main>
    <post></post>
    <img />
</main>
<<<<<<< Updated upstream
```

若将上面HTML架构转换成DOM Tree

![Alt](https://github.com/lifechat/Vtech-admin/blob/main/doc/docImg/8.jpeg?raw=true)

使用 DFS，查找順序就會是

    root -> content -> sidebar -> menu -> main -> post -> img

而使用 BFS，查找順序就會變成是

    root -> content -> main -> sidebar -> post -> img -> menu
=======
若將上面 HTML 架構轉換成 DOM Tree


使用 DFS，查找順序就會是

root -> content -> sidebar -> menu -> main -> post -> img
而使用 BFS，查找順序就會變成是

root -> content -> main -> sidebar -> post -> img -> menu
>>>>>>> Stashed changes

## 结论
嗯,我相信大多数人都是如此，看资料总觉得了解的不够透彻，不自己实操一波，不踩坑，始终不会知道那些地方需要规避，那些地方是难点。关于tree（要不是面试会考我八辈子也不会看),毕竟我们都不是写游览器底层的，有点那种面试造飞机，工作拧螺丝的感觉。但这些概念一直频繁的使用在framework跟library里面，明白它们才能让你更进一个台阶，明白它们才能写出更为高效的程式。

更何况现在卷计算机的人实在太多了，太多能人身兼数职，理论和实操都很棒，像很多人在学校里面都被教一些无用的理论，实操更是少之更少，但我相信要成为一个出色水手，技能和理论是必备。

另外懂了 Tree 概念再來看 DOM tree 真的容易很多呢
<<<<<<< Updated upstream
=======

## 参考链接
>>>>>>> Stashed changes
