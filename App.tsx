import { useFonts } from 'expo-font';
import SpellListView from './views/spellListView';

export default function App() {
    const [fontsLoaded] = useFonts({
        headerFont: require('./assets/fonts/Avenir-Next-Condensed-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
            <SpellListView />
        </>
    );
}
