import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import { styles } from '../styleSheets/characterTab.styles';
import { useState } from 'react';
import { CharacterCreator } from './CharacterCreator';

function CharacterTab({ characters }) {
    const [selectedCharacterID, setselectedCharacterID] = useState('');

    const [isModalDisplayed, setIsModalDisplayed] = useState(false);

    console.log(`The current selected character is ${selectedCharacterID}`);

    return (
        <>
            <View style={styles.characterContainer}>
                <SelectDropdown
                    data={characters}
                    rowTextForSelection={(item, index) => {
                        return item.name;
                    }}
                    onSelect={(selectedItem) => {
                        setselectedCharacterID(selectedItem);
                    }}
                    defaultButtonText="select a character"
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
                <CharacterCreator
                    isModalDisplayed={isModalDisplayed}
                    setIsModalDisplayed={setIsModalDisplayed}
                />
            </View>
        </>
    );
}

export { CharacterTab };
