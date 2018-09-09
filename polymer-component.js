import { Element as PolymerElement } from '@polymer/polymer';

class PolymerComponent extends PolymerElement {
  constructor() {
    super()
  }

  static get template() {
    return `<div> This here be an application </div>`
  }
}

customElements.define('polymer-component', PolymerComponent);
