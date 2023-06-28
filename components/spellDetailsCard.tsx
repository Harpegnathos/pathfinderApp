import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Modal, View, Text } from 'react-native';
import { styles } from '../styleSheets/spellDetailsCard.styles';
import { spells } from './spellList';
import { CastTime } from './castTime';

function SpellDetailsCard({ displayModal, myModalFunc }) {
    return (
        <Modal visible={displayModal} animationType="slide">
            <MaterialIcons
                name="close"
                size={24}
                onPress={() => {
                    myModalFunc(false);
                }}
            />
            <View style={styles.modalContent}>
                <Text>Guess what motherfucker!</Text>
            </View>
        </Modal>
    );
}

export { SpellDetailsCard };
