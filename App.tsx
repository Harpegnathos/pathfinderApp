import { Text, View, ScrollView } from 'react-native';
import { styles } from './App.styles';
import * as spellList from './jsons/spells.json';
import { ISpell } from './interfaces/iSpell';
import { CastTime } from './components/castTime';

export default function App() {
    const spells = (spellList as any).results.map((spell: ISpell) => {
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

    return (
        <View style={styles.previewContainer}>
            <ScrollView>
                {spells.map((item) => {
                    return (
                        <View key={item.id} style={styles.previewBox}>
                            <View style={styles.previewBoxBanner}>
                                <Text style={styles.previewBoxHeader}>
                                    {item.name}
                                </Text>
                                <Text style={styles.previewBoxHeader}>
                                    {`${item.spellCategory} ${item.level}`}
                                </Text>
                            </View>
                            <View style={styles.dividerLine}></View>
                            <View style={styles.previewBoxBody}>
                                <View style={styles.traitContainer}>
                                    {item.traits.map((trait, index) => {
                                        return (
                                            <Text
                                                key={index}
                                                style={styles.traitBoxes}
                                            >
                                                {trait}
                                            </Text>
                                        );
                                    })}
                                </View>
                                <Text>
                                    <Text style={styles.textBold}>Cast </Text>
                                    <CastTime castTimeValue={item.castTime} />
                                    {` ${item.components}`}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}
