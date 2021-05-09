/*by Integral*/
const { MongoClient } = require('mongodb');
const { mongodburi } = require('./config.js');

const uri = mongodburi;
const mongoClient = new MongoClient(uri, { useNewUrlParser: true }, { autoIndex: false }, { useUnifiedTopology: true });

module.exports = {
  connectDB: async (client) => {
    await mongoClient.connect();
    client.db = {};
    client.db.config = await mongoClient.db().collection('config');
    client.db.userdata = await mongoClient.db().collection('userdata');
    client.db.url = await mongoClient.db().collection('url');
    console.log('mongoDB est maintenant connecter!');
    return mongoClient;
  },
};
