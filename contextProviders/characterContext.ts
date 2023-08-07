import { createContext } from 'react';
import { ICharacter } from '../interfaces/iCharacter';

export interface ICharacterContext {
    currentCharacter: ICharacter;
    setCurrentCharacter: (c: ICharacter) => void;
}

export const CharacterContext = createContext<ICharacterContext | null>(null);
