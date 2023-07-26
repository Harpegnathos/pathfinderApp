import Constants from 'expo-constants';
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;

async function getAllSpells() {
    console.log(uri);
    const response = await fetch(`${uri}/api/getAllSpells`);
    const fullSpellList = await response.json();
    console.log(fullSpellList);
    return fullSpellList;
}

export { getAllSpells };
