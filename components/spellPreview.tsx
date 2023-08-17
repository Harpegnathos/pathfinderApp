import { View, ScrollView, Text } from 'react-native';
import { styles } from '../styleSheets/spellPreview.styles';
import { CastTime } from './castTime';
import { SpellAdder } from './spellAdder';

function SpellPreview({ spellList }) {
    return (
        <View style={styles.previewContainer}>
            <ScrollView>
                {spellList.map((item, index) => {
                    return (
                        <View key={index}>
                            {/* <Pressable
                                    key={index}
                                    onPress={() => {
                                        setSpellID(item.id);
                                        myModalFunc(true);
                                    }}
                                > */}
                            <View style={styles.previewBox} key={index}>
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
                                    <View style={styles.textBox}>
                                        <Text>
                                            <Text style={styles.textBold}>
                                                Cast{' '}
                                            </Text>
                                            <CastTime
                                                castTimeValue={item.castTime}
                                            />
                                            {` ${item.components}`}
                                        </Text>
                                        <SpellAdder spellID={item.id} />
                                    </View>
                                </View>
                            </View>
                            {/* </Pressable> */}
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

export { SpellPreview };
