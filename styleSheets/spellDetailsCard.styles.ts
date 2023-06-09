import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroundTint: {
        height: '100%',
        width: '100%',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'lightblue',
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
});

export { styles };
