import template from './template';
import '../add-stock'
import '../entries-list'


export default class AppElement extends HTMLElement {
    constructor() {
        super();
        AppElement.template = document.createElement('template').innerHTML = template;
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = AppElement.template;
    }
  }
window.customElements.define('app-element', AppElement);
