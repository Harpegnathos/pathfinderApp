import { Modal, Pressable, TextInput, View, Text } from 'react-native';
import { styles } from '../styleSheets/characterTab.styles';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import { deleteCharacter } from '../utilities/dataHelper';

function CharacterDeleter({
    isDeleterDisplayed,
    setIsDeleterDisplayed,
    selectedCharacterID,
}) {
    const [textValue, setTextValue] = useState('');

    return (
        <Modal
            visible={isDeleterDisplayed}
            animationType="fade"
            transparent={true}
        >
            <BlurView intensity={50} tint="dark" style={styles.backgroundTint}>
                <View style={styles.modalView}>
                    <View style={styles.topBar}>
                        <MaterialIcons
                            name="close"
                            size={24}
                            onPress={() => {
                                setIsDeleterDisplayed(false);
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.warningText}>
                            WARNING! You are about to delete the current
                            character.
                        </Text>
                        <Text style={styles.warningText}>
                            This action cannot be undone!
                        </Text>
                        <Pressable
                            style={styles.deleteCharacterButton}
                            onPress={() => {
                                const sendDeleteRequest = async () => {
                                    await deleteCharacter(selectedCharacterID);
                                    setTextValue('');
                                    setIsDeleterDisplayed(false);
                                };
                                sendDeleteRequest();
                            }}
                        >
                            <Text style={styles.deleteText}>
                                Delete Character
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </BlurView>
        </Modal>
    );
}

export { CharacterDeleter };
