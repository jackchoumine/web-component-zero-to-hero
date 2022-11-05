# web-component-zero-to-hero

web component 的关注度越来越高，流行的前端框架也都支持，有必要了解。

## web component 是什么

web component 是一套标准的技术，允许我们编写模块化的、可复用的自定义 html 标签，无需任何框架或者库，使用原生 js 就可编写。

### custom element

我们封装的 web component 叫自定义元素，其必须包含由中划线(`-`)，用于分割单词，目的是为了防止和未来的 html 标签冲突。

例如`<my-button></my-button>`。

使用时必须有结束标签。

### shadow DOM

封装样式和标签的一种方法，是一个棵附加在一个 DOM 的 DOM 树，确保 web component 内的样式和外部的样式不会相互影响：内部样式作用到外部和内部样式被外部样式覆盖。

### HTML template

`template`包裹 html 标签，允许我们编写可复用的 DOM，浏览器并不解析内部的 DOM，内部的脚本不会执行，图标不会加载，样式也不生效。

一个 web component 的例子：

```js
class MyElement extends HTMLElement {
  constructor() {
    // always call super() first
    super()
    console.log('constructed!')
  }

  connectedCallback() {
    console.log('connected!')
  }

  disconnectedCallback() {
    console.log('disconnected!')
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log(`Attribute: ${name} changed!`)
  }
  //NOTE myEle['my-attr'] = 'hello' 这样不生效
  // myEle.setAttribute('my-attr', '1234') // 生效
  static get observedAttributes() {
    return ['my-attr']
  }

  adoptedCallback() {
    console.log('adopted!')
  }
}

// NOTE 注册自定义元素
window.customElements.define('my-element', MyElement)
```

## 组件生命周期

生命周期是在特定阶段自动执行的函数。

执行顺序

```bash
constructor # 类的构造函数，首先执行，需要调用 super。 可在此设置组件初始状态、监听事件和创建shadow DOM
↓
connectedCallback # 组件插入到DOM中后执行。可设置发烧 http 或者设置默认特性，特性。
↓
attributeChangedCallback # 标签特性修改后执行。要检测特性的修改需要添加静态 getter，只有在 observedAttributes 返回值中的属性修改了才能被检测到。
↓
disconnectedCallback # 组件被移除
```

`adoptedCallback`，组件被移动到新的文档中，只有存在`iframe`的页面才会用到。

## 属性

## 特性

## 特性 vs 属性

## 事件

## 样式

## 总结
