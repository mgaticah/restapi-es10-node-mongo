import MongoClient from 'mongodb';
const dataServerUri = 'mongodb://localhost:27017';
export async function connect() {
    try {
        const client = await MongoClient.connect(dataServerUri, { useNewUrlParser: true });
        const db = client.db('node-restapi');
        console.log('Database connected');
        return db;
    } catch (e) {
        console.log(e);
    }

}
