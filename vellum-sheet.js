import { LitElement, html, css } from 'lit-element'

class Sheet extends LitElement {

  static get is() { return 'vellum-sheet' }

  static get styles() {
    return css`
    :host {
      display: block;
      margin-bottom: 1em;
      border: 1px var(--char-sheet-border-color, black) solid;
      padding: 0.5em;
      border-radius: 5px;
      font-family: sans-serif;
      font-size: 10pt;
    }`
  }

  render() {
    return html`
    <div>
      <slot></slot>
    </div>`
  }

}

customElements.define(Sheet.is, Sheet)
