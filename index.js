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

  disconnectedCallback() {
    console.log('disconnected!')
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
