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
            componentArray.push('Material');
        }
        if (spell.system.components.somatic) {
            componentArray.push('Somatic');
        }
        if (spell.system.components.verbal) {
            componentArray.push('Verbal');
        }
        return {
            id: spell._id,
            name: spell.name,
            spellCategory: spell.system.category.value,
            level: spell.system.level.value,
            traits: spell.system.traits.value,
            traditions: spell.system.traditions.value,
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
    previewBox: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
});
