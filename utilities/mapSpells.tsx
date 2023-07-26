import { ISpell } from '../interfaces/iSpell';

function mapSpells(spellList) {
    const spells = (spellList as any).map((spell: ISpell) => {
        const componentArray = [];
        if (spell.system.components.material) {
            componentArray.push('material');
        }
        if (spell.system.components.somatic) {
            componentArray.push('somatic');
        }
        if (spell.system.components.verbal) {
            componentArray.push('verbal');
        }

        return {
            id: spell._id,
            name: spell.name,
            spellCategory: spell.system.category.value,
            level: spell.system.level.value,
            traits: spell.system.traits.value,
            traditions: spell.system.traditions.value.join(', '),
            castTime: spell.system.time.value,
            components: componentArray.join(', '),
        };
    });

    return spells;
}

export { mapSpells };
