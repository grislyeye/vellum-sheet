export const StoreValueBehaviour = Base => class extends Base {

  saveValue(event) {
    if (this.editable) this.value = event.target.value
  }

  get storageKey() {
    if (this.docid) return `${this.docid}:vellum-sheet-field-${slugify(this.label)}`
    else return `vellum-sheet-field-${slugify(this.label)}`
  }

  get storedValue() {
    return localStorage[this.storageKey] || ''
  }

  set storedValue(value) {
    localStorage[this.storageKey] = value
  }

  connectedCallback() {
    super.connectedCallback()
    if (this.editable) this.value = this.storedValue
  }

  performUpdate() {
    super.performUpdate()

    if (this.editable) {
      this.storedValue = this.value
      const inputElement = this.shadowRoot.querySelector('#input')
      inputElement.value = this.value
    }
  }

}

const slugify = text =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
