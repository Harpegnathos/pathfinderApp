import { Modal, View, Text, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { spells } from './spellList';
import { CastTime } from './castTime';
import { styles } from '../styleSheets/spellPreview.styles';

function SpellDetailsCard({ displayModal, myModalFunc, spellID }) {
    console.log('spellID in SpellDetailsCard', spellID);
    return (
        <Modal visible={displayModal} animationType="fade" transparent={true}>
            <BlurView intensity={50} tint="dark" style={styles.backgroundTint}>
                <View style={styles.modalView}>
                    <MaterialIcons
                        name="close"
                        size={24}
                        onPress={() => {
                            myModalFunc(false);
                        }}
                    />
                    <View style={styles.previewContainer}>
                        <ScrollView>
                            {spells.map((item) => {
                                return (
                                    <View style={styles.previewBox}>
                                        <View style={styles.previewBoxBanner}>
                                            <Text
                                                style={styles.previewBoxHeader}
                                            >
                                                {item.name}
                                            </Text>
                                            <Text
                                                style={styles.previewBoxHeader}
                                            >
                                                {`${item.spellCategory} ${item.level}`}
                                            </Text>
                                        </View>
                                        <View style={styles.dividerLine}></View>
                                        <View style={styles.previewBoxBody}>
                                            <View style={styles.traitContainer}>
                                                {item.traits.map(
                                                    (trait, index: number) => {
                                                        return (
                                                            <Text
                                                                key={index}
                                                                style={
                                                                    styles.traitBoxes
                                                                }
                                                            >
                                                                {trait}
                                                            </Text>
                                                        );
                                                    }
                                                )}
                                            </View>
                                            <Text>
                                                <Text style={styles.textBold}>
                                                    Cast{' '}
                                                </Text>
                                                <CastTime
                                                    castTimeValue={
                                                        item.castTime
                                                    }
                                                />
                                                {` ${item.components}`}
                                            </Text>
                                        </View>
                                    </View>
                                );
                            })}
                        </ScrollView>
                    </View>
                </View>
            </BlurView>
        </Modal>
    );
}

export { SpellDetailsCard };
