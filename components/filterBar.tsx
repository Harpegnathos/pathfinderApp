import { View, Text, Pressable } from 'react-native';
import { styles } from '../styleSheets/filterBar.styles';
import { IMappedSpell } from '../interfaces/iMappedSpell';

function FilterBar({
    spells,
    filteredSpells,
    setFilteredSpells,
    currentCharacter,
}) {
    console.log('currentCharacter: ', currentCharacter);
    console.log('filteredSpells: ', filteredSpells);
    return (
        <>
            <View style={styles.dropdown}>
                <Text style={styles.headerFont}>Filter</Text>
            </View>
            <View style={styles.container}>
                <Pressable
                    style={styles.filterButton}
                    onPress={() => {
                        if (!currentCharacter) {
                            return;
                        }

                        setFilteredSpells(
                            spells.filter((spell: IMappedSpell) =>
                                currentCharacter.spellList.includes(spell.id)
                            )
                        );
                    }}
                >
                    <Text style={styles.buttonText}>In Spellbook</Text>
                </Pressable>
                <Pressable
                    style={styles.filterButton}
                    onPress={() => {
                        setFilteredSpells(spells);
                    }}
                >
                    <Text style={styles.buttonText}>Clear Filters</Text>
                </Pressable>
            </View>
        </>
    );
}

export { FilterBar };
