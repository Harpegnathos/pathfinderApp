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

export { getAllSpells, getAllCharacters };
