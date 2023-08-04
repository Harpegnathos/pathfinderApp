import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useCharacter(initialValue) {
    // if (!initialValue) {
    //     return;
    // }
    const [value, setValue] = useState(() => {
        const getStorage = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('character');
                if (jsonValue != null) return JSON.parse(jsonValue);
                return initialValue;
            } catch (e) {
                console.error(e);
            }
        };
        getStorage();
    });

    useEffect(() => {
        const setStorage = async () => {
            try {
                await AsyncStorage.setItem('character', JSON.stringify(value));
            } catch (e) {
                console.error(e);
            }
        };
        setStorage();
    }, [value]);

    return [value, setValue];
}
