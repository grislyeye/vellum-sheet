
class Modifier {
  constructor(value) {
    this.value = value
    if (value >= 0) this.pretty = '+' + value
    else this.pretty = value
  }
}

class Ability {
  constructor(name, score) {
    this.name = name
    this.score = score
    if (score) {
      this.modifier = new Modifier(Math.round((score / 2.1) - 5))
      this.passive = 10 + this.modifier.value
    } else {
      this.score = 10
      this.modifier = new Modifier(0)
      this.passive = 10
    }
  }
}

class ProficiencyBonus extends Modifier {
  constructor(level) {
    if (level) super(Math.ceil(level / 5) + 1)
    else super(0)
  }
}

class SavingThrow extends Modifier {
  constructor(ability, savingThrows, bonus) {
    var isProficient = savingThrows.includes(ability.name)
    if (isProficient) super(ability.modifier.value + bonus.value)
    else super(ability.modifier.value)
  }
}

class SavingThrows {
  constructor(character, savingThrows) {
    if (savingThrows) {
      this.strength = new SavingThrow(character.strength, savingThrows, character.proficiencyBonus)
      this.constitution = new SavingThrow(character.constitution, savingThrows, character.proficiencyBonus)
      this.dexterity = new SavingThrow(character.dexterity, savingThrows, character.proficiencyBonus)
      this.intelligence = new SavingThrow(character.intelligence, savingThrows, character.proficiencyBonus)
      this.wisdom = new SavingThrow(character.wisdom, savingThrows, character.proficiencyBonus)
      this.charisma = new SavingThrow(character.charisma, savingThrows, character.proficiencyBonus)
    }
  }
}

class Skill extends Modifier {
  constructor(name, skills, ability, bonus) {
    var isProficient = skills.includes(name)
    if (isProficient) {
      super(ability.modifier.value + bonus.value)
      this.passive = 10 + ability.modifier.value + bonus.value
    } else {
      super(ability.modifier.value)
      this.passive = 10 + ability.modifier.value
    }
  }
}

class Skills {
  constructor(character, skills) {
    if (skills) {
      this.acrobatics = new Skill('Acrobatics', skills, character.dexterity, character.proficiencyBonus)
      this.animalHandling = new Skill('Animal Handling', skills, character.wisdom, character.proficiencyBonus)
      this.arcana = new Skill('Arcana', skills, character.intelligence, character.proficiencyBonus)
      this.athletics = new Skill('Athletics', skills, character.strength, character.proficiencyBonus)
      this.deception = new Skill('Deception', skills, character.charisma, character.proficiencyBonus)
      this.history = new Skill('History', skills, character.intelligence, character.proficiencyBonus)
      this.insight = new Skill('Insight', skills, character.wisdom, character.proficiencyBonus)
      this.intimidation = new Skill('Intimidation', skills, character.charisma, character.proficiencyBonus)
      this.investigation = new Skill('Investigation', skills, character.intelligence, character.proficiencyBonus)
      this.medicine = new Skill('Medicine', skills, character.intelligence, character.proficiencyBonus)
      this.nature = new Skill('Nature', skills, character.intelligence, character.proficiencyBonus)
      this.perception = new Skill('Perception', skills, character.wisdom, character.proficiencyBonus)
      this.performance = new Skill('Performance', skills, character.charisma, character.proficiencyBonus)
      this.persuasion = new Skill('Persuasion', skills, character.charisma, character.proficiencyBonus)
      this.religion = new Skill('Religion', skills, character.intelligence, character.proficiencyBonus)
      this.sleightOfHand = new Skill('Sleight of Hand', skills, character.dexterity, character.proficiencyBonus)
      this.stealth = new Skill('Stealth', skills, character.dexterity, character.proficiencyBonus)
      this.survival = new Skill('Survival', skills, character.wisdom, character.proficiencyBonus)
    }
  }
}

class Attack {
  constructor(character, attack) {
    this.name = attack.name
    this.type = attack.type

    var attackModifier = character.strength.modifier

    if (attack.finesse && attack.finesse === 'true' && character.dexterity.modifier.value > character.strength.modifier.value) {
      attackModifier = character.dexterity.modifier
    }

    if (attack.ranged && attack.ranged === 'true') {
      attackModifier = character.dexterity.modifier
    }

    if (attack.offhand && attack.offhand === 'true') {
      attackModifier = character.dexterity.modifier
    }

    if (attack.proficient && attack.proficient === 'true') {
      this.attackBonus = new Modifier(attackModifier.value + character.proficiencyBonus.value)
      this.damageBonus = new Modifier(attackModifier.value + character.proficiencyBonus.value)
    } else {
      this.attackBonus = new Modifier(attackModifier.value)
      this.damageBonus = new Modifier(attackModifier.value)
    }

    if (attack.offhand && attack.offhand === 'true' && attack.proficient && attack.proficient === 'true') {
      this.damageBonus = character.proficiencyBonus
    } else if (attack.offhand && attack.offhand === 'true') {
      this.damageBonus = new Modifier(0)
    }

    if (attack.attackBonus) {
      this.attackBonus = new Modifier(parseInt(attack.attackBonus) + this.attackBonus.value)
    }

    this.damage = attack.damage + this.damageBonus.pretty
  }
}

export const character = data => {
  data.strength = new Ability('Strength', data.strength)
  data.dexterity = new Ability('Dexterity', data.dexterity)
  data.constitution = new Ability('Constitution', data.constitution)
  data.intelligence = new Ability('Intelligence', data.intelligence)
  data.wisdom = new Ability('Wisdom', data.wisdom)
  data.charisma = new Ability('Charisma', data.charisma)

  data.proficiencyBonus = new ProficiencyBonus(data.level)

  data.savingThrows = new SavingThrows(data, data['saving-throws'])
  data.skills = new Skills(data, data.skills)

  if (data.attacks) {
    if (Array.isArray(data.attacks)) {
      data.attacks = data.attacks.map(function(a) { return new Attack(data, a) })
    } else {
      data.attacks = [new Attack(data, data.attacks)]
    }
  }

  for (const i in data.features) {
    if (data.features[i].expertise) {
      var oldSkill = data.skills[data.features[i].expertise]
      data.skills[data.features[i].expertise] = new Modifier(oldSkill.value + data.proficiencyBonus.value)
      data.skills[data.features[i].expertise].passive = oldSkill.passive + data.proficiencyBonus.value
    }
  }

  return data
}
