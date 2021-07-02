import { LitElement, html, css } from 'lit-element'

class SheetField extends LitElement {

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

    input[type="text"] {
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

    :host(.small) input[type="text"] {
      min-height: 1.2em;
      font-size: 1.2em;
    }

    :host([class~="horizontal"]) .content {
      display: flex;
      flex-direction: row;
    }

    :host([class~="horizontal"]) .content > * {
      margin-top: auto;
      margin-bottom: auto;
    }

    :host([class~="horizontal"]) input[type="text"],
    :host([class~="horizontal"]) p {
      border: 0;
      border-right: 1px black solid;
      text-align: center;
      width: var(--vellum-sheet-input-width, 50%);
      font-size: inherit;
    }

    :host([class~="horizontal"]) h2 {
      padding-left: 0.5em;
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
      }
    }
  }

  constructor() {
    super()
    this.lines = 1
    this.editable = false
  }

  render() {
    return html`
    <div class="content">
      ${this.editable ? html`<input type="text">` : html`<p><slot></slot></p>`}
      ${this.lines > 1 ? [...Array(this.lines - 1)].map(a => html`<p>&nbsp;</p>`) : html``}
      <h2>${this.label}</h2>
    </div>`
  }

}

customElements.define(SheetField.is, SheetField)
