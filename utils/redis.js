// Redis-client class

const redis = require('redis');

class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.client.on('error', (err) => {
      console.log(`Redis client not connected to the server: ${err.toString()}`);
    });
    this.client.on('connect', () => {
      console.log('Redis client connected to the server');
    });
  }

  isAlive() {
    return this.client.connected;
  }

  async get(key) {
    try {
      return await this.client.get(key);
    } catch (err) {
      console.error(`Error getting key ${key}: ${err.toString()}`);
    }
  }

  async set(key, value, duration) {
    try {
      await this.client.set(key, value, 'EX', duration);
    } catch (err) {
      console.error(`Error setting key ${key} with value ${value}: ${err.toString()}`);
    }
  }

  async del(key) {
    try {
      await this.client.del(key);
    } catch (err) {
      console.error(`Error deleting key ${key}: ${err.toString()}`);
    }
  }
}

const redisClient = new RedisClient();
export default redisClient;
