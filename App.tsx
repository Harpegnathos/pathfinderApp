import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TileViewer } from './components/tileViewer';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Pathfinder Spell sApp!</Text>
            <StatusBar style="auto" />
            {/* <TileViewer /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
