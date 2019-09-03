import { LitElement, html, css } from 'lit-element'

class SheetGroup extends LitElement {

  static get is() { return 'vellum-sheet-group' }

  static get styles() {
    return css`
    :host {
      background: lightgrey;
      padding: 0.5em;
      border-radius: 5px;
    }`

  }

  render() {
    return html`<slot></slot>`
  }

}

customElements.define(SheetGroup.is, SheetGroup)
