import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    previewContainer: {
        flex: 1,
        backgroundColor: '#fde8c7',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60,
        paddingHorizontal: 10,
        width: '100%',
    },
    previewBox: {
        backgroundColor: '#fbd692',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    previewBoxBanner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    previewBoxHeader: {
        fontSize: 20,
        maxWidth: '70%',
        textTransform: 'uppercase',
        fontFamily: 'AvenirNextCondensed-Bold',
    },
    dividerLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    previewBoxBody: {},
    traitContainer: {
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 5,
        paddingVertical: 3,
    },
    traitBoxes: {
        backgroundColor: '#751000',
        borderColor: '#c79c02',
        borderWidth: 3,
        textTransform: 'uppercase',
        color: 'white',
        paddingHorizontal: 5,
        paddingVertical: 3,
    },
    textBold: {
        fontWeight: 'bold',
    },
});

export { styles };