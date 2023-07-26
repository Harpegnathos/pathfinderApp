import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { SpellPreview } from './components/spellPreview';
import { SpellDetailsCard } from './components/spellDetailsCard';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import { styles } from './styleSheets/homePage.styles';
import { mapSpells } from './utilities/mapSpells';
import { getAllSpells } from './utilities/dataHelper';

export default function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const [spellID, setSpellID] = useState('');

    const [fontsLoaded] = useFonts({
        headerFont: require('./assets/fonts/Avenir-Next-Condensed-Bold.ttf'),
    });

    const [spells, setSpells] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fullSpellList = await getAllSpells();
                const mappedSpells = mapSpells(fullSpellList);
                setSpells(mappedSpells);
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();
    }, []);

    if (!fontsLoaded || spells.length === 0) {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#751000" />
            </View>
        );
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
                <SpellPreview
                    myModalFunc={setModalOpen}
                    setSpellID={setSpellID}
                    spellList={spells}
                />
            </SafeAreaView>
        </>
    );
}
