import { View, Text, Pressable } from 'react-native';
import { styles } from '../styleSheets/filterBar.styles';

function FilterBar() {
    return (
        <>
            <View style={styles.dropdown}>
                <Text style={styles.headerFont}>Filter</Text>
            </View>
            <View style={styles.container}>
                <Pressable
                    style={styles.filterButton}
                    onPress={() => {
                        console.log('In Spellbook Press');
                    }}
                >
                    <Text style={styles.buttonText}>In Spellbook</Text>
                </Pressable>
                <Pressable
                    style={styles.filterButton}
                    onPress={() => {
                        console.log('Clear All Press');
                    }}
                >
                    <Text style={styles.buttonText}>Clear All</Text>
                </Pressable>
            </View>
        </>
    );
}

export { FilterBar };
