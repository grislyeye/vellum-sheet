import { LitElement, html, css } from 'lit-element'
import { StoreValueBehaviour } from './lib/store-value-behaviour.js'

class SheetBox extends StoreValueBehaviour(LitElement) {

  static get is() { return 'vellum-sheet-box' }

  static get styles() {
    return css`
    :host {
      background: white;
      border: 1px var(--char-sheet-border-color, black) solid;
      padding-left: 0.5em;
      padding-right: 0.5em;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
      font-size: inherit;
      text-transform: uppercase;
      padding:  0.2em 0 0 0;
      margin: 1em 0 0 0;
      color: black;
    }

    textarea,
    p {
      font-family: inherit;
      background: transparent;
      border: none;
      height: 100%;
      width: 100%;
      resize: none;
      line-height: 170%;
    }`
  }

  static get properties() {
    return {
      label: {
        type: String
      },
      editable: {
        type: Boolean
      },
      sync: {
        type: Boolean
      },
      store: {
        type: Boolean
      },
      docid: {
        type: String
      },
      value: {
        type: String
      }
    }
  }

  connectedCallback() {
    super.connectedCallback()
    this.sync = this.sync === true
    this.editable = this.editable === true
  }

  render() {
    return html`
    ${this.editable || this.sync ? this.renderEditable() : html`<p><slot></slot></p>`}
    ${this.label ? html`<h2>${this.label}</h2>` : html``}`
  }

  renderEditable() {
    return html`<textarea id="input" ?disabled=${!this.editable} @input=${this.storeValue}>${this.value || ''}</textarea>`
  }

}

customElements.define(SheetBox.is, SheetBox)
