import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    dropdown: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    accordion: {
        backgroundColor: '#fbd692',
    },
    headerFont: {
        fontWeight: 'bold',
    },
    container: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fbd692',
    },
    filterButton: {
        backgroundColor: '#fde8c7',
        borderRadius: 20,
        alignSelf: 'center',
        padding: 10,
    },
    buttonText: {
        fontWeight: 'bold',
    },
});

export { styles };
