const { MongoClient } = require('mongodb');

async function main() {
    const uri =
        'mongodb+srv://Harpegnathos:2eV7aRbtFUZTFhKE@cluster0.trv0ude.mongodb.net/?retryWrites=true&w=majority';

    const Client = new MongoClient(uri);

    try {
        await Client.connect();
        console.log('Successfully connected to server');

        // await listDatabases(Client);

        await findOneSpellByName(Client, 'Aberrrant Whispers');

        // await findSpellsWithRitualTag(Client, {
        //     tag: 'ritual',
        //     maximumNumberOfResults: 5,
        // });
    } catch (e) {
        console.error(e);
    } finally {
        await Client.close();
        console.log('Successfully disconnected from server');
    }
}

main().catch(console.error);

async function listDatabases(Client) {
    const databasesList = await Client.db().admin().listDatabases();

    console.log('Databases:');
    databasesList.databases.forEach((db) => {
        console.log(`- ${db.name}`);
    });
}

async function findSpellsWithRitualTag(
    Client,
    { tag = '', maximumNumberOfResults = Number.MAX_SAFE_INTEGER } = {}
) {
    const cursor = Client.db('PATHFINDER_APP')
        .collection('SPELL_LIST')
        .find({
            'system.category.value': { $eq: tag },
        })
        .limit(maximumNumberOfResults);

    const results = await cursor.toArray();

    if (results.length > 0) {
        console.log(`Found spells with the ${tag} tag:`);
        results.forEach((result, i) => {
            console.log();
            console.log(`${i + 1}. name: ${result.name}`);
            console.log(`   _id: ${result._id}`);
        });
    } else {
        console.log(`No spells found with the ${tag} tag:`);
    }
}

async function findOneSpellByName(client, nameOfSpell) {
    const result = await client
        .db('PATHFINDER_APP')
        .collection('SPELL_LIST')
        .findOne({ name: nameOfSpell });

    if (result) {
        console.log(
            `Found a spell in the collection with the name '${nameOfSpell}':`
        );
        console.log(result);
    } else {
        console.log(`No spells found with the name '${nameOfSpell}'`);
    }
}
