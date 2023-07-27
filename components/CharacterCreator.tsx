import { Modal, Pressable, TextInput, View, Text } from 'react-native';
import { styles } from '../styleSheets/characterTab.styles';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

function CharacterCreator({ isModalDisplayed, setIsModalDisplayed }) {
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
                            placeholder="Enter new character name..."
                        />
                        <Pressable style={styles.createCharacterButton}>
                            <Text>Create Character</Text>
                        </Pressable>
                    </View>
                </View>
            </BlurView>
        </Modal>
    );
}

export { CharacterCreator };
