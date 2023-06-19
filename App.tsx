import { FilterBar } from './components/filterBar';
import { SpellPreview } from './components/spellPreview';
import { useFonts } from 'expo-font';

export default function App() {
    const [fontsLoaded] = useFonts({
        headerFont: require('./assets/fonts/Avenir-Next-Condensed-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
            {/* <FilterBar /> */}
            <SpellPreview />
        </>
    );
}
