import { MongoClient } from 'mongodb';

// Connection URL
const url = 'mongodb+srv://cluster0.trv0ude.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'PATHFINDER_APP';

async function connect() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');

    // the following code examples can be pasted here...

    return 'done.';
}

// connect()
// .then(console.log)
// .catch(console.error)
// .finally(() => client.close());

export { connect };
