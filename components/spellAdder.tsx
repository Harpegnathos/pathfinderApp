import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { updateCharacterSpells } from '../utilities/dataHelper';
import { useContext } from 'react';
import { CharacterContext } from '../contextProviders/characterContext';

function SpellAdder({ spellID }) {
    const { currentCharacter, setCurrentCharacter } =
        useContext(CharacterContext);

    if (currentCharacter === null) {
        return null;
    }

    if (currentCharacter.spellList.includes(spellID)) {
        return (
            <Pressable
                onPress={() => {
                    const removeSpell = async () => {
                        const updatedSpells = currentCharacter.spellList.filter(
                            (e) => e !== spellID
                        );
                        await updateCharacterSpells(
                            updatedSpells,
                            currentCharacter._id
                        );
                        setCurrentCharacter({
                            ...currentCharacter,
                            spellList: updatedSpells,
                        });
                    };

                    removeSpell();
                }}
            >
                <Feather name="minus-square" size={24} color="#d40000" />
            </Pressable>
        );
    }

    return (
        <Pressable
            onPress={() => {
                const addSpell = async () => {
                    const updatedSpells = [
                        ...currentCharacter.spellList,
                        spellID,
                    ];
                    await updateCharacterSpells(
                        updatedSpells,
                        currentCharacter._id
                    );

                    setCurrentCharacter({
                        ...currentCharacter,
                        spellList: updatedSpells,
                    });
                };

                addSpell();
            }}
        >
            <Feather name="plus-square" size={24} />
        </Pressable>
    );
}

export { SpellAdder };
