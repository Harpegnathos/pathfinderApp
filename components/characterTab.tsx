import { View, Pressable } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import { styles } from '../styleSheets/characterTab.styles';
import { useState } from 'react';
import { CharacterCreator } from './CharacterCreator';
import { CharacterDeleter } from './CharacterDeleter';

function CharacterTab({ characters }) {
    const [selectedCharacterID, setselectedCharacterID] = useState('');

    const [isModalDisplayed, setIsModalDisplayed] = useState(false);
    const [isDeleterDisplayed, setIsDeleterDisplayed] = useState(false);

    console.log(`The current selected character is ${selectedCharacterID}`);

    return (
        <>
            <View style={styles.characterContainer}>
                <SelectDropdown
                    data={characters}
                    rowTextForSelection={(item, index) => {
                        return item.name;
                    }}
                    onSelect={(item) => {
                        setselectedCharacterID(item._id);
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
                    disabled={selectedCharacterID === ''}
                    style={{
                        ...styles.deleteButton,
                        backgroundColor:
                            selectedCharacterID === '' ? '#5e5e5e' : '#d40000',
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
                    selectedCharacterID={selectedCharacterID}
                />
            </View>
        </>
    );
}

export { CharacterTab };
