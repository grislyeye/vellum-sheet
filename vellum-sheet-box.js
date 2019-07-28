import { LitElement, html, css } from 'lit-element'
import './vellum-sheet-box.js'

class SheetBox extends LitElement {

  static get is() { return 'vellum-sheet-box' }

  static get styles() {
    return css`
    :host {
      background: white;
      border: 1px var(--char-sheet-border-color, black) solid;
      padding: 0.5em;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    ::slotted(*) {
      font-size: 0.8em;
      font-family: sans-serif;
    }

    ::slotted(ul) {
      margin: 0;
      padding: 0;
      padding-left: 0;
      list-style-type: none;
    }

    h2 {
      text-align: center;
      margin-top: 1em;
      border: 0;
      border-top: 1px black solid;
      font-weight: bold;
      font-size: 0.8em;
      text-transform: uppercase;
      padding:  0.2em 0 0 0;
      margin: 1em 0 0 0;
      color: black;
    }`
  }

  render() {
    return html`
    <slot></slot>
    <h2>${this.title}</h2>`
  }

}

customElements.define(SheetBox.is, SheetBox)
