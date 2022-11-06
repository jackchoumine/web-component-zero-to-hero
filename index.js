/*
 * @Date        : 2022-11-05 17:39:21
 * @Author      : ZhouQiJun
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2022-11-05 17:52:39
 * @Description :
 */
class MyElement extends HTMLElement {
  constructor() {
    // always call super() first
    super()
    console.log('constructed!')
  }

  connectedCallback() {
    console.log('connected!')
  }
  // 没参数
  disconnectedCallback(args) {
    console.log('disconnected!')
    console.log(args)
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log(`oldVal:${oldVal}, newVal:${newVal}`)
    console.log(`Attribute: ${name} changed!`)
  }
  static get observedAttributes() {
    return ['my-attr']
  }

  adoptedCallback() {
    console.log('adopted!')
  }
}

window.customElements.define('my-element', MyElement)

class HelloWorld extends HTMLElement {
  constructor() {
    super()
    this.name = 'web component'
  }
  static get observedAttributes() {
    return ['name']
  }

  attributeChangedCallback(property, oldValue, newValue) {
    console.log('attributeChangedCallback')
    if (oldValue === newValue) return
    this[property] = newValue
    this.textContent = `Hello ${this.name}`
  }
  // 没有参数
  connectedCallback() {
    console.log('connected hello-world')

    const shadow = this.attachShadow({ mode: 'closed' })
    const style = document.createElement('style')
    style.innerHTML = `
      p {
        text-align: center;
        font-weight: normal;
        padding: 1em;
        margin: 0 0 2em 0;
        background-color: #eee;
        border: 1px solid #666;
      }`

    // shadow.appendChild(style)

    this.textContent = `Hello ${this.name}`
  }
}

window.customElements.define('hello-world', HelloWorld)

class MyCard extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    let styleEle = document.createElement('style')
    styleEle.textContent = /*css*/ `
      /* https://juejin.cn/post/7065279022401323045 */
                /* 选择带有类名的自定义元素 */
                :host(.my-card){
                    display: block;
                    margin: 20px;
                    width: 200px;
                    height: 200px;
                    border: 3px solid #000;
                }
                /* 选择祖先元素的 id 为 container 的自定义元素 */
                :host-context(#container){
                    display: block;
                    background-color:red;
                    margin: 20px;
                    width: 200px;
                    height: 200px;
                    border: 3px solid #000;
                }
                /* 后代选择器 */
                :host .card-header{
                    border: 2px solid red;
                    padding:10px;
                    background-color: yellow;
                    font-size: 40px;
                    font-weight: bold;
                }
            `
    this.shadow.appendChild(styleEle)

    let headerEle = document.createElement('div')
    headerEle.className = 'card-header'
    headerEle.innerText = 'My Card'
    this.shadow.appendChild(headerEle)
  }
}

window.customElements.define('my-card', MyCard)
