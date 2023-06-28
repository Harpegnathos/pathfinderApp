import { useState } from 'react';
import { useFonts } from 'expo-font';
import { FilterBar } from './components/filterBar';
import { SpellPreview } from './components/spellPreview';
import { SpellDetailsCard } from './components/spellDetailsCard';
import { SafeAreaView, View } from 'react-native';
import { styles } from './styleSheets/homePage.styles';

export default function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const [spellID, setSpellID] = useState('');

    const [fontsLoaded] = useFonts({
        headerFont: require('./assets/fonts/Avenir-Next-Condensed-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    console.log('spellID in app', spellID);

    return (
        <>
            <SafeAreaView style={styles.safeView}>
                <SpellDetailsCard
                    displayModal={modalOpen}
                    myModalFunc={setModalOpen}
                    spellID={spellID}
                />
                {/* <FilterBar /> */}
                <SpellPreview
                    myModalFunc={setModalOpen}
                    setSpellID={setSpellID}
                />
            </SafeAreaView>
        </>
    );
}
