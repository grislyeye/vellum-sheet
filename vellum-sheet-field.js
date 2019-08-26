import { LitElement, html, css } from 'lit-element'

class SheetField extends LitElement {

  static get is() { return 'vellum-sheet-field' }

  static get styles() {
    return css`
    .content {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    p {
      font-size: 2em;
      padding: 0;
      margin: 0;
      text-align: left;
      border: 0;
      font-weight: bold;
    }

    :host(.small) p {
      min-height: 1.2em;
      font-size: 1.2em;
    }

    h2 {
      font-size: 0.8em;
      text-transform: uppercase;
      padding: 0.2em 0 0 0;
      margin: 0;
      color: black;
      border-top: 1px black solid;
      font-weight: normal;
    }`

  }

  static get properties() {
    return {
      label: {
        type: String
      }
    }
  }

  render() {
    return html`
    <div class="content">
      <p><slot></slot></p>
      <h2>${this.label}</h2>
    </div>`
  }

}

customElements.define(SheetField.is, SheetField)
