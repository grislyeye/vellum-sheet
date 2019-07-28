import { LitElement, html, css } from 'lit-element'
import 'microtesia.js/lib/microtesia.js'
import { character } from './lib/character.js'
import './vellum-sheet.js'

class Character extends LitElement {

  static get is() { return 'vellum-char-sheet' }

  static get properties() {
    return {
      character: Object
    }
  }

  static get styles() {
    return css`
    :host {
      display: block;
    }

    .character-content {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 16% 17% 17% 17% 17% 16%;
    }

    .character-content > div {
      border-radius: 5px;
      padding: 0.5em;
    }

    .character-content > div,
    .character-content > header {
      margin: 0.5em;
    }

    .character-content h1 {
      font-size: 2em;
      padding: 0;
      margin: 0;
      text-align: left;
      border: 0;
    }

    .character-content h2 {
      border: 0;
      border-top: 1px black solid;
      font-weight: bold;
      font-size: 0.8em;
      text-transform: uppercase;
      padding:  0.2em 0 0 0;
      margin: 0;
      color: black;
    }

    /* .name */

    .character-content .name {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
    }

    .character-content .name {
      justify-content: space-between;
    }

    /* .detail */

    .character-content .detail p {
      font-size: 1.2em;
      padding: 0;
      margin: 0;
      font-weight: bold;
    }

    .character-content .detail {
      display: flex;
      flex-direction: column-reverse;
      height: 2.3em;
    }

    .character-content .detail h2 {
      font-weight: normal;
    }

    /* .details */

    .character-content .details {
      grid-column: 3 / 7;
      grid-row: 1 / 1;
      background: lightgrey;
    }

    .character-content .details .row {
      display: flex;
    }

    .character-content .details .row  + .row {
      padding-top: 1em;
    }

    .character-content .details .detail {
      width: 33%;
    }

    /* .abilities */

    .character-content .abilities {
      grid-column: 1 / 2;
      grid-row: 2 / 4;
      background: lightgrey;
    }

    .character-content .abilities .box {
      background: white;
      border: 1px var(--char-sheet-border-color, black) solid;
      padding: 0.5em;
      border-radius: 5px;
      text-align: center;
    }

    .character-content .abilities .box .score {
      font-size: 3em;
      margin: 0;
      padding: 0;
    }

    .character-content .abilities .box .modifier {
      margin: 0;
      padding: 0;
    }

    .character-content .abilities .box h2 {
      border: 0 none;
      font-weight: normal;
      padding: 0;
    }

    .character-content .abilities > .box + .box {
      margin-top: 0.5em;
    }

    /* .proficiencies */

    .character-content .proficiencies {
      grid-column: 2 / 3;
      grid-row: 2 / 4;
      padding: 0;
    }

    .character-content .proficiencies div + div {
      margin-top: 0.5em;
    }

    /* .lists */

    .character-content .list {
      border: 1px var(--char-sheet-border-color, black) solid;
      padding: 0.5em;
      border-radius: 5px;
      background: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .character-content .list ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      padding-left: 0;
    }

    .character-content .list li {
      font-size: 0.8em;
      margin: 0.5em;
      padding: 0;
    }

    .character-content .list h2 {
      text-align: center;
      margin-top: 1em;
    }

    /* .features */

    .character-content .features {
      grid-column: 5 / 7;
      grid-row: 3 / 7;
      border: 1px var(--char-sheet-border-color, black) solid;
    }

    /* .value */

    .character-content .value {
      background: white;
      border: 1px var(--char-sheet-border-color, black) solid;
      padding: 0.5em;
      border-radius: 5px;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      align-content: center;
    }

    .character-content .value h2 {
      font-weight: normal;
      font-size: 0.7em;
      border: none;
      padding: 0;
      margin: 0;
      padding-left: 0.5rem;
    }

    .character-content .value p {
      font-size: 1.5em;
      padding: 0;
      margin: 0;
      border-right: 1px black solid;
      padding-right: 0.5rem;
    }

    /* .combat-stats */

    .character-content .combat-stats {
      grid-column: 3 / 5;
      grid-row: 2 / 3;
      background: lightgrey;
      display: flex;
      flex-direction: column;
    }

    .character-content .combat-stats > div + div {
      margin-top: 0.5em;
    }

    /* .characteristics */

    .character-content .characteristics {
      grid-column: 5 / 7;
      grid-row: 2 / 3;
      background: lightgrey;
      display: flex;
      flex-direction: column;
    }

    .character-content .characteristics > div + div {
      margin-top: 0.5em;
    }

    .character-content .characteristics .list {
      flex: 1;
    }

    /* .attacks */

    .character-content .attacks {
      grid-column: 3 / 5;
      grid-row: 3 / 4;
      border: 1px var(--char-sheet-border-color, black) solid;
      min-height: 10em;
      font-size: 0.8em;
    }

    .character-content .attacks table {
      width: 100%;
      border-spacing: 0.5em;
    }

    .character-content .attacks table th {
      text-transform: uppercase;
      font-size: 0.7em;
      font-weight: normal;
    }

    .character-content .attacks table td {
      background: lightgrey;
      text-align: center;
      height: 1.5em;
    }

    /* .passive-perception */

    .character-content .passive-perception {
      grid-column: 1 / 3;
      grid-row: 5 / 6;
    }

    /* .other-proficiencies */

    .character-content .other-proficiencies {
      grid-column: 1 / 3;
      grid-row: 6 / 7;
      border: 1px var(--char-sheet-border-color, black) solid;
      min-height: 10em;
    }

    /* .equipment */

    .character-content .equipment {
      grid-column: 3 / 5;
      grid-row: 5 / 7;
      border: 1px var(--char-sheet-border-color, black) solid;
      min-height: 10em;
    }`
  }

  constructor() {
    super()
    this.character = this.computeCharacter()
  }

  render() {
    return html`
    <vellum-sheet>
      <div class="character-content">

        <header class="name detail box">
          <h2>
            Character Name
          </h2>

          <h1>
            ${this.character.name}
          </h1>
        </header>

        <div class="details box">

          <div class="row">
            <div class="class detail">
              <h2>Class &amp; Level</h2>
              <p>
                ${this.character.level ? html`Level ${this.character.level}` : html``} ${this.character.class}
              </p>
            </div>

            <div class="background detail">
              <h2>Background</h2>
              <p>
                ${this.character.background}
              </p>
            </div>

            <div class="player-name detail">
              <h2>Player Name</h2>
              <p>
                ${this.character.player}
              </p>
            </div>
          </div>

          <div class="row">
            <div class="race detail">
              <h2>Race</h2>
              <p>
                ${this.character.race}
              </p>
            </div>

            <div class="alignment detail">
              <h2>Alignment</h2>
              <p>
                ${this.character.alignment}
              </p>
            </div>

            <div class="xp detail">
              <h2>Experience Points</h2>
              <p>
                ${this.character.xp}
              </p>
            </div>
          </div>

        </div>

        <div class="abilities group">
          <div class="strength box">
            <h2>Strength</h2>
            <p class="score">${this.character.strength.score}</p>
            <p class="modifier">(${this.character.strength.modifier.pretty})</p>
          </div>
          <div class="dexterity box">
            <h2>Dexterity</h2>
            <p class="score">${this.character.dexterity.score}</p>
            <p class="modifier">(${this.character.dexterity.modifier.pretty})</p>
          </div>
          <div class="constitution box">
            <h2>Constitution</h2>
            <p class="score">${this.character.constitution.score}</p>
            <p class="modifier">(${this.character.constitution.modifier.pretty})</p>
          </div>
          <div class="intelligence box">
            <h2>Intelligence</h2>
            <p class="score">${this.character.intelligence.score}</p>
            <p class="modifier">(${this.character.intelligence.modifier.pretty})</p>
          </div>
          <div class="wisdom box">
            <h2>Wisdom</h2>
            <p class="score">${this.character.wisdom.score}</p>
            <p class="modifier">(${this.character.wisdom.modifier.pretty})</p>
          </div>
          <div class="charisma box">
            <h2>Charisma</h2>
            <p class="score">${this.character.charisma.score}</p>
            <p class="modifier">(${this.character.charisma.modifier.pretty})</p>
          </div>
        </div>

        <div class="proficiencies group">

          <div class="proficiency-bonus value box">
            <h2>Proficiency<br/>Bonus</h2>
            <p>${this.character.proficiencyBonus.pretty}</p>
          </div>

          <div class="saving-throws list box">
            <ul>
              <li>${this.character.savingThrows.strength ? this.character.savingThrows.strength.pretty : html``} Strength</li>
              <li>${this.character.savingThrows.dexterity ? this.character.savingThrows.dexterity.pretty : html``} Dexterity</li>
              <li>${this.character.savingThrows.constitution ? this.character.savingThrows.constitution.pretty : html``} Constitution</li>
              <li>${this.character.savingThrows.intelligence ? this.character.savingThrows.intelligence.pretty : html``} Intelligence</li>
              <li>${this.character.savingThrows.wisdom ? this.character.savingThrows.wisdom.pretty : html``} Wisdom</li>
              <li>${this.character.savingThrows.charisma ? this.character.savingThrows.charisma.pretty : html``} Charisma</li>
            </ul>
            <h2>Saving Throws</h2>
          </div>

          <div class="skills list box">
            <ul>
              <li>${this.character.skills.acrobatics ? this.character.skills.acrobatics.pretty : html``} Acrobatics</li>
              <li>${this.character.skills.animalHandling ? this.character.skills.animalHandling.pretty : html``} Animal Handling</li>
              <li>${this.character.skills.arcana ? this.character.skills.arcana.pretty : html``} Arcana</li>
              <li>${this.character.skills.athletics ? this.character.skills.athletics.pretty : html``} Athletics</li>
              <li>${this.character.skills.deception ? this.character.skills.deception.pretty : html``} Deception</li>
              <li>${this.character.skills.history ? this.character.skills.history.pretty : html``} History</li>
              <li>${this.character.skills.insight ? this.character.skills.insight.pretty : html``} Insight</li>
              <li>${this.character.skills.intimidation ? this.character.skills.intimidation.pretty : html``} Intimidation</li>
              <li>${this.character.skills.investigation ? this.character.skills.investigation.pretty : html``} Investigation</li>
              <li>${this.character.skills.medicine ? this.character.skills.medicine.pretty : html``} Medicine</li>
              <li>${this.character.skills.nature ? this.character.skills.nature.pretty : html``} Nature</li>
              <li>${this.character.skills.perception ? this.character.skills.perception.pretty : html``} Perception</li>
              <li>${this.character.skills.performance ? this.character.skills.performance.pretty : html``} Performance</li>
              <li>${this.character.skills.persuasion ? this.character.skills.persuasion.pretty : html``} Persuasion</li>
              <li>${this.character.skills.religion ? this.character.skills.religion.pretty : html``} Religion</li>
              <li>${this.character.skills.sleightOfHand ? this.character.skills.sleightOfHand.pretty : html``} Sleight of Hand</li>
              <li>${this.character.skills.stealth ? this.character.skills.stealth.pretty : html``} Stealth</li>
              <li>${this.character.skills.survival ? this.character.skills.survival.pretty : html``} Survival</li>
            </ul>
            <h2>Skills</h2>
          </div>

        </div>

        <div class="combat-stats group">

          <div class="ac value">
            <h2>Armor Class</h2>
            <p>${this.character.ac}</p>
          </div>

          <div class="initiative value">
            <h2>Initiative</h2>
            <p>${this.character.dexterity.modifier.pretty}</p>
          </div>

          <div class="speed value">
            <h2>Speed</h2>
            <p>${this.character.speed} ft.</p>
          </div>

          <div class="max-hit-points value">
            <h2>Hit Points</h2>
            <p>${this.character['max-hit-points']}</p>
          </div>

          <div class="hit-dice value">
            <h2>Hit Dice</h2>
            <p>${this.character.level}${this.character['hit-dice']}</p>
          </div>

          <div class="size value">
            <h2>Size</h2>
            <p>${this.character.size}</p>
          </div>

        </div>

        <div class="characteristics group">
          <div class="personality-traits list">
            <ul>
              ${Array.isArray(this.character['personality-traits']) ? this.renderList(this.character['personality-traits']) : html`<li>${this.character['personality-traits']}</li>`}
            </ul>
            <h2>Personality Traits</h2>
          </div>
          <div class="ideals list">
            <ul>
              ${Array.isArray(this.character.ideals) ? this.renderList(this.character.ideals) : html`<li>${this.character.ideals}</li>`}
            </ul>
            <h2>Ideals</h2>
          </div>
          <div class="bonds list">
            <ul>
              ${Array.isArray(this.character.bonds) ? this.renderList(this.character.bonds) : html`<li>${this.character.bonds}</li>`}
            </ul>
            <h2>Bonds</h2>
          </div>
          <div class="flaws list">
            <ul>
              ${Array.isArray(this.character.flaws) ? this.renderList(this.character.flaws) : html`<li>${this.character.flaws}</li>`}
              </template>
            </ul>
            <h2>Flaws</h2>
          </div>
        </div>

        <div class="attacks group list">
          <table>
            <thead>
              <tr>
                <th class="name">Name</th>
                <th class="bonus">Atk Bonus</th>
                <th class="damage">Damage/type</th>
              </tr>
              <tbody>
                ${this.character.attacks ? this.renderList(this.character.attacks, this.renderAttack) : html``}
              </tbody>
            </thead>
          </table>

          <ul>
            ${this.character.attackNotes ? this.character.attackNotes.map(item => html`<li>*${item}</li>`) : html``}
          </ul>

          <h2>Attacks &amp; Spellcasting</h2>
        </div>

        <div class="passive-perception value">
          <h2>Passive Wisdom (Perception)</h2>
          <p>${this.character.skills.perception ? this.character.skills.perception.passive : html``}</p>
        </div>

        <div class="equipment group list">
          <ul>
            ${Array.isArray(this.character.equipment) ? this.renderList(this.character.equipment) : html`<li>${this.character.equipment}</li>`}
          </ul>
          <h2>Equipment</h2>
        </div>

        <div class="features group list">
          <ul>
            ${Array.isArray(this.character.features) ? this.renderFeatures(this.character.features) : html`<li>${this.character.features}</li>`}
          </ul>
          <h2>Features &amp; Traits</h2>
        </div>

        <div class="other-proficiencies group list">
          <ul>
            ${Array.isArray(this.character['other-proficiencies']) ? this.renderList(this.character['other-proficiencies']) : html`<li>${this.character['other-proficiencies']}</li>`}
          </ul>
          <h2>Other Proficiencies &amp; Languages</h2>
        </div>

      </div>
    </vellum-sheet>`
  }

  computeCharacter() {
    return character(parseMicrodata(this)[0])
  }

  renderList(list, mapper) {
    if (!mapper) mapper = (item) => html`<li>${item}</li>`
    return list.map(mapper)
  }

  renderAttack(attack) {
    return html`
      <tr>
        <td class="name">${attack.name}</td>
        <td class="bonus">${attack.attackBonus.pretty}</td>
        <td class="damage">${attack.damage} ${attack.type}</td>
      </tr>`
  }

  renderFeatures(features) {
    return features.map(item => html`<li><strong>${item.name}</strong> ${item.description}</li>`)
  }
}

customElements.define(Character.is, Character)
