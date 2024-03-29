import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Modal Styles
    backgroundTint: {
        height: '100%',
        width: '100%',
    },
    modalView: {
        margin: 20,
        backgroundColor: '#fde8c7',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    createCharacterButton: {
        backgroundColor: '#fbd692',
        borderRadius: 20,
        alignSelf: 'center',
        padding: 10,
    },
    warningText: {
        textAlign: 'center',
    },
    deleteCharacterButton: {
        backgroundColor: '#d40000',
        borderRadius: 20,
        alignSelf: 'center',
        padding: 10,
        marginTop: 10,
    },
    createCharacterText: {
        fontWeight: 'bold',
    },
    deleteText: {
        color: 'white',
        fontWeight: 'bold',
    },

    // Element Styles
    characterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        verticalAlign: 'middle',
        padding: 16,
        backgroundColor: '#fde8c7',
    },
    characterSelector: {
        height: 40,
        width: '65%',
        borderRadius: 15,
        backgroundColor: '#fbd692',
    },
    iconBox: {
        backgroundColor: '#fbd692',
        borderRadius: 15,
        height: 40,
        width: 40,
    },
    addCharacterIcon: {
        alignSelf: 'center',
        lineHeight: 40,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    deleteButton: {
        borderRadius: 15,
        height: 40,
        width: 40,
    },
    deleteCharacterIcon: {
        alignSelf: 'center',
        lineHeight: 40,
    },
});

export { styles };
