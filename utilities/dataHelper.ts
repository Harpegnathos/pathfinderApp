import Constants from 'expo-constants';
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;

async function getAllSpells() {
    const response = await fetch(`${uri}/api/getAllSpells`);
    const result = await response.json();
    return result;
}

async function getAllCharacters() {
    const response = await fetch(`${uri}/api/getAllCharacters`);
    const result = await response.json();
    return result;
}

async function createCharacter(name) {
    const data = {
        name: name,
        spellList: [],
    };
    let result;
    try {
        const response = await fetch(`${uri}/api/createCharacter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        result = await response.json();
    } catch (e) {
        console.error(e);
    }
    return result;
}

export { getAllSpells, getAllCharacters, createCharacter };
