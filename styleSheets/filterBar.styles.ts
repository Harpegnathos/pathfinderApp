import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    dropdown: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerFont: {
        fontWeight: 'bold',
    },
    container: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fde8c7',
    },
    filterButton: {
        backgroundColor: '#fbd692',
        borderRadius: 20,
        alignSelf: 'center',
        padding: 10,
    },
    buttonText: {
        fontWeight: 'bold',
    },
});

export { styles };
