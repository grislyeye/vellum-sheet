export const StoreValueBehaviour = Base => class extends Base {

  saveValue(event) {
    this.value = event.target.value
  }

  get storageKey() {
    return `vellum-sheet-field-${slugify(this.label)}`
  }

  get value() {
    return localStorage[this.storageKey] || ''
  }

  set value(value) {
    localStorage[this.storageKey] = value

    const options = {
      bubbles: true,
      composed: true,
      detail: { key: this.storageKey, value: value }
    }
    const event = new CustomEvent('sheet-updated', options)
    this.dispatchEvent(event)
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
