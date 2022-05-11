import { LitElement, html, css } from 'lit-element'
import { StoreValueBehaviour } from './lib/store-value-behaviour.js'

class SheetField extends StoreValueBehaviour(LitElement) {

  static get is() { return 'vellum-sheet-field' }

  static get styles() {
    return css`
    .content {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
    }

    p {
      font-size: 2em;
      padding: 0;
      margin: 0;
      text-align: inherit;
      border: 0;
      border-bottom: 1px black solid;
    }

    :host(.small) p {
      min-height: 1.2em;
      font-size: 1.2em;
    }

    h2 {
      font-size: 12px;
      text-transform: uppercase;
      padding: 0.2em 0 0 0;
      margin: 0;
      color: black;
      font-weight: normal;
    }

    input[type="text"],
    p {
      font-size: 2em;
      font-family: inherit;
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
      border: 0;
      border-bottom: 1px black solid;
      height: 100%;
      width: 100%;
      text-align: inherit;
    }

    :host(.small) input[type="text"],
    :host(.small) p {
      min-height: 1.2em;
      font-size: 1.2em;
    }

    :host([class~="horizontal"]) {
      width: 100%;
      height: 100%;
    }

    :host([class~="horizontal"]) .content {
      display: flex;
      flex-direction: row;
    }

    :host([class~="horizontal"]) .content > * {
    }

    :host([class~="horizontal"]) input[type="text"],
    :host([class~="horizontal"]) p {
      border: 0;
      text-align: center;
      width: var(--vellum-sheet-input-width, 50%);
      font-size: inherit;
    }

    :host([class~="horizontal"]) h2 {
      border-left: 1px black solid;
      padding-left: 0.5em;
      padding-top: 0.8em;
      padding-bottom: 0.8em;
      font-size: 12px;
    }`
  }

  static get properties() {
    return {
      label: {
        type: String
      },
      lines: {
        type: Number
      },
      editable: {
        type: Boolean
      },
      store: {
        type: Boolean
      },
      sync: {
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

  constructor() {
    super()
    this.lines = 1
  }

  connectedCallback() {
    super.connectedCallback()
    this.sync = this.sync === true
    this.editable = this.editable === true
  }

  render() {
    return html`
    <div class="content">
      ${this.editable || this.sync ? this._renderInput() : html`<p><slot></slot></p>`}
      ${this.lines > 1 ? [...Array(this.lines - 1)].map(a => html`<p></p>`) : html``}
      <h2>${this.label}</h2>
    </div>`
  }

  _renderInput() {
    return html`<input id="input" type="text" ?disabled=${!this.editable} @input=${this.storeValue} value="${this.value || ''}">`
  }

}

customElements.define(SheetField.is, SheetField)
