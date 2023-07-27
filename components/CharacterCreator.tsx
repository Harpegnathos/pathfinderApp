import { Modal, Pressable, TextInput, View, Text } from 'react-native';
import { styles } from '../styleSheets/characterTab.styles';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import { createCharacter } from '../utilities/dataHelper';

function CharacterCreator({ isModalDisplayed, setIsModalDisplayed }) {
    const [textValue, setTextValue] = useState('');

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
                            style={styles.createCharacterButton}
                            disabled={textValue.length === 0}
                            onPress={() => {
                                const sendCharacterName = async () => {
                                    await createCharacter(textValue);
                                    setTextValue('');
                                    setIsModalDisplayed(false);
                                };
                                sendCharacterName();
                            }}
                        >
                            <Text>Create Character</Text>
                        </Pressable>
                    </View>
                </View>
            </BlurView>
        </Modal>
    );
}

export { CharacterCreator };
