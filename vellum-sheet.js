import { LitElement, html, css } from 'lit-element'

class Sheet extends LitElement {

  static get is() { return 'vellum-sheet' }

  static get properties() {
    return {
      title: String
    }
  }

  static get styles() {
    return css`
    :host {
      display: block;
      margin-bottom: 1em;
      border: 1px var(--char-sheet-border-color, black) solid;
      padding: 0.5em;
      border-radius: 5px;
    }`
  }

  render() {
    return html`<slot></slot>`
  }

}

customElements.define(Sheet.is, Sheet)
