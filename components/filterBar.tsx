import { View, Text, Pressable, Platform, UIManager } from 'react-native';
import { styles } from '../styleSheets/filterBar.styles';
import { IMappedSpell } from '../interfaces/iMappedSpell';
import { useEffect } from 'react';
import { AccordionItem } from 'react-native-accordion-list-view';

function FilterBar({
    spells,
    filteredSpells,
    setFilteredSpells,
    currentCharacter,
}) {
    useEffect(() => {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
    }, []);

    return (
        <>
            <View style={styles.dropdown}>
                <AccordionItem
                    containerStyle={styles.accordion}
                    customTitle={() => (
                        <Text style={styles.headerFont}>Filter</Text>
                    )}
                    customIcon={null}
                    customBody={() => (
                        <View style={styles.container}>
                            <Pressable
                                style={styles.filterButton}
                                onPress={() => {
                                    if (!currentCharacter) {
                                        return;
                                    }

                                    setFilteredSpells(
                                        spells.filter((spell: IMappedSpell) =>
                                            currentCharacter.spellList.includes(
                                                spell.id
                                            )
                                        )
                                    );
                                }}
                            >
                                <Text style={styles.buttonText}>
                                    In Spellbook
                                </Text>
                            </Pressable>
                            <Pressable
                                style={styles.filterButton}
                                onPress={() => {
                                    setFilteredSpells(spells);
                                }}
                            >
                                <Text style={styles.buttonText}>
                                    Clear Filters
                                </Text>
                            </Pressable>
                        </View>
                    )}
                    animationDuration={300}
                    isOpen={false}
                />
            </View>
        </>
    );
}

export { FilterBar };
