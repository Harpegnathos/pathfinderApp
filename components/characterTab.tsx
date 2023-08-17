import { View, Pressable } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import { styles } from '../styleSheets/characterTab.styles';
import { useContext, useState } from 'react';
import { CharacterCreator } from './CharacterCreator';
import { CharacterDeleter } from './CharacterDeleter';
import { CharacterContext } from '../contextProviders/characterContext';

function CharacterTab({ characters, setFilteredSpells, spells }) {
    const [isModalDisplayed, setIsModalDisplayed] = useState(false);
    const [isDeleterDisplayed, setIsDeleterDisplayed] = useState(false);
    const { currentCharacter, setCurrentCharacter } =
        useContext(CharacterContext);

    return (
        <>
            <View style={styles.characterContainer}>
                <SelectDropdown
                    data={characters}
                    rowTextForSelection={(item, index) => {
                        return item.name;
                    }}
                    onSelect={(item) => {
                        setCurrentCharacter(item);
                        setFilteredSpells(spells);
                    }}
                    buttonTextAfterSelection={(item, index) => {
                        return item.name;
                    }}
                    defaultButtonText="select character"
                    buttonStyle={styles.characterSelector}
                />
                <Pressable
                    style={styles.iconBox}
                    onPress={() => {
                        setIsModalDisplayed(true);
                    }}
                >
                    <Ionicons
                        name="person-add-sharp"
                        size={24}
                        color="black"
                        style={styles.addCharacterIcon}
                    />
                </Pressable>
                <Pressable
                    disabled={currentCharacter === null}
                    style={{
                        ...styles.deleteButton,
                        backgroundColor:
                            currentCharacter === null ? '#5e5e5e' : '#d40000',
                    }}
                    onPress={() => {
                        setIsDeleterDisplayed(true);
                    }}
                >
                    <Feather
                        name="trash-2"
                        size={24}
                        color="white"
                        style={styles.deleteCharacterIcon}
                    />
                </Pressable>
                <CharacterCreator
                    isModalDisplayed={isModalDisplayed}
                    setIsModalDisplayed={setIsModalDisplayed}
                />
                <CharacterDeleter
                    isDeleterDisplayed={isDeleterDisplayed}
                    setIsDeleterDisplayed={setIsDeleterDisplayed}
                    selectedCharacterID={currentCharacter?._id}
                />
            </View>
        </>
    );
}

export { CharacterTab };
