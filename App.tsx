import { useState } from 'react';
import { useFonts } from 'expo-font';
import { FilterBar } from './components/filterBar';
import { SpellPreview } from './components/spellPreview';
import { SpellDetailsCard } from './components/spellDetailsCard';
import { SafeAreaView } from 'react-native';
import { styles } from './styleSheets/homePage.styles';

export default function App() {
    const [modalOpen, setModalOpen] = useState(false);

    const [fontsLoaded] = useFonts({
        headerFont: require('./assets/fonts/Avenir-Next-Condensed-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
            <SafeAreaView style={styles.safeView}>
                <SpellDetailsCard
                    displayModal={modalOpen}
                    myModalFunc={setModalOpen}
                />
                <FilterBar />
                <SpellPreview myModalFunc={setModalOpen} />
            </SafeAreaView>
        </>
    );
}
