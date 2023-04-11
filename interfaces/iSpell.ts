export interface ISpell {
    _id: string;
    name: string;
    system: {
        ability: {
            value: string;
        };
        area: number;
        category: {
            value: string;
        };
        components: {
            focus: boolean;
            material: boolean;
            somatic: boolean;
            verbal: boolean;
        };
        cost: {
            value: string;
        };
        damage: {
            value: {
                0: {
                    applyMod: boolean;
                    type: {
                        categories: string[];
                        subtype: string;
                        value: string;
                    };
                    value: string;
                };
            };
        };
        description: {
            value: string;
        };
        duration: {
            value: string;
        };
        hasCounteractCheck: {
            value: boolean;
        };
        heightening: {
            damage: {
                0: string;
            };
            interval: number;
            type: string;
        };
        level: {
            value: number;
        };
        materials: {
            value: string;
        };
        prepared: {
            value: string;
        };
        primarycheck: {
            value: string;
        };
        range: {
            value: string;
        };
        rules: string[];
        save: {
            basic: string;
            value: string;
        };
        school: {
            value: string;
        };
        secondarycasters: {
            value: string;
        };
        secondarycheck: {
            value: string;
        };
        source: {
            value: string;
        };
        spellType: {
            value: string;
        };
        sustained: {
            value: boolean;
        };
        target: {
            value: string;
        };
        time: {
            value: number;
        };
        traditions: {
            value: string[];
        };
        traits: {
            rarity: string;
            value: string[];
        };
    };
    type: string;
}
