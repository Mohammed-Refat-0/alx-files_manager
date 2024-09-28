// mongodb client

const { MongoClient } = require('mongodb');

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';
    const url = `mongodb://${host}:${port}`;

    this.client = new MongoClient(url, { useUnifiedTopology: true });
    this.db = this.client.db(database);

    this.client.connect().catch((err) => {
      console.error('Failed to connect to MongoDB', err);
    });
  }

  async isAlive() {
    try {
      await this.client.db().admin().ping();
      return true;
    } catch (err) {
      return false;
    }
  }

  async nbUsers() {
    try {
      const usersCollection = this.db.collection('users');
      return await usersCollection.countDocuments();
    } catch (err) {
      console.error('Failed to count users', err);
      return 0;
    }
  }

  async nbFiles() {
    try {
      const filesCollection = this.db.collection('files');
      return await filesCollection.countDocuments();
    } catch (err) {
      console.error('Failed to count files', err);
      return 0;
    }
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
