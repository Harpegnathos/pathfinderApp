import { useState } from 'react';
import { View, ScrollView, Pressable, Text } from 'react-native';
import { styles } from '../styleSheets/spellPreview.styles';
import { CastTime } from './castTime';

function SpellPreview({ myModalFunc, setSpellID, spellList }) {
    return (
        <>
            <View style={styles.previewContainer}>
                <ScrollView>
                    {spellList.map((item, index) => {
                        return (
                            <Pressable
                                key={index}
                                onPress={() => {
                                    setSpellID(item.id);
                                    console.log(item.name, item.id);
                                    myModalFunc(true);
                                }}
                            >
                                <View style={styles.previewBox}>
                                    <View style={styles.previewBoxBanner}>
                                        <Text style={styles.previewBoxHeader}>
                                            {item.name}
                                        </Text>
                                        <Text style={styles.previewBoxHeader}>
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
                                                castTimeValue={item.castTime}
                                            />
                                            {` ${item.components}`}
                                        </Text>
                                    </View>
                                </View>
                            </Pressable>
                        );
                    })}
                </ScrollView>
            </View>
        </>
    );
}
export { SpellPreview };
