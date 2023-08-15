import { useEffect, useState } from 'react';
import { CharacterTab } from '../components/characterTab';
import { SpellPreview } from '../components/spellPreview';
import { SpellDetailsCard } from '../components/spellDetailsCard';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import { styles } from '../styleSheets/homePage.styles';
import { mapSpells } from '../utilities/mapSpells';
import { getAllCharacters, getAllSpells } from '../utilities/dataHelper';
import { CharacterContext } from '../contextProviders/characterContext';
import { FilterBar } from '../components/filterBar';

export default function SpellListView() {
    const [modalOpen, setModalOpen] = useState(false);
    const [spellID, setSpellID] = useState('');
    const [spells, setSpells] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [currentCharacter, setCurrentCharacter] = useState(null);

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const characterList = await getAllCharacters();
                setCharacters(characterList);
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();
        console.log('fetched characters');
    }, [currentCharacter]);

    if (spells.length === 0) {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#751000" />
            </View>
        );
    }

    return (
        <CharacterContext.Provider
            value={{ currentCharacter, setCurrentCharacter }}
        >
            <SafeAreaView style={styles.safeView}>
                <CharacterTab characters={characters} />
                <FilterBar />
                <SpellDetailsCard
                    displayModal={modalOpen}
                    myModalFunc={setModalOpen}
                    spellID={spellID}
                    spellList={spells}
                />
                <SpellPreview spellList={spells} />
            </SafeAreaView>
        </CharacterContext.Provider>
    );
}
