import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import { TileViewer } from './components/tileViewer';
import * as spellList from './jsons/spells.json';
import { ISpell } from './interfaces/iSpell';

export default function App() {
    const spells = spellList.results.map((spell: ISpell) => {
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

        // const splitTraits = spell.system.traits.value;

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
                                    {item.spellCategory} {item.level}
                                </Text>
                            </View>
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
                                    Cast {item.castTime} {item.components}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    previewContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60,
        paddingHorizontal: 20,
        width: '100%',
    },
    previewBox: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    previewBoxBanner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'pink',
    },
    previewBoxHeader: {
        backgroundColor: '#80d9d9',
        fontSize: 20,
        maxWidth: '70%',
        textTransform: 'uppercase',
    },
    previewBoxBody: {
        backgroundColor: 'white',
    },
    traitContainer: {
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 5,
    },
    traitBoxes: {
        backgroundColor: '#751000',
        borderColor: '#e6cb47',
        borderWidth: 3,
        textTransform: 'uppercase',
        color: 'white',
        paddingHorizontal: 5,
        paddingVertical: 3,
    },
});
