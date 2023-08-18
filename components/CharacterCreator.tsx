import { Modal, Pressable, TextInput, View, Text } from 'react-native';
import { styles } from '../styleSheets/characterTab.styles';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useContext, useState } from 'react';
import { createCharacter } from '../utilities/dataHelper';
import { CharacterContext } from '../contextProviders/characterContext';

function CharacterCreator({ isModalDisplayed, setIsModalDisplayed }) {
    const [textValue, setTextValue] = useState('');
    const { setCurrentCharacter } = useContext(CharacterContext);

    return (
        <Modal
            visible={isModalDisplayed}
            animationType="fade"
            transparent={true}
        >
            <BlurView intensity={50} tint="dark" style={styles.backgroundTint}>
                <View style={styles.modalView}>
                    <MaterialIcons
                        name="close"
                        size={24}
                        onPress={() => {
                            setIsModalDisplayed(false);
                            setTextValue('');
                        }}
                    />
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            onChangeText={(currentValue) => {
                                setTextValue(currentValue);
                            }}
                            value={textValue}
                        />
                        <Pressable
                            disabled={textValue.length === 0}
                            style={{
                                ...styles.createCharacterButton,
                                backgroundColor:
                                    textValue.length === 0
                                        ? '#5e5e5e'
                                        : '#fbd692',
                            }}
                            onPress={() => {
                                const sendCharacterName = async () => {
                                    const characterModel =
                                        await createCharacter(textValue);
                                    setTextValue('');
                                    setIsModalDisplayed(false);
                                    return characterModel;
                                };
                                let characterModel;
                                sendCharacterName().then((res) => {
                                    characterModel = res;

                                    setCurrentCharacter({
                                        _id: characterModel._id,
                                        name: characterModel.name,
                                        spellList: [],
                                    });
                                });
                            }}
                        >
                            <Text
                                style={{
                                    ...styles.createCharacterText,
                                    color:
                                        textValue.length === 0
                                            ? 'white'
                                            : 'black',
                                }}
                            >
                                Create Character
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </BlurView>
        </Modal>
    );
}

export { CharacterCreator };
