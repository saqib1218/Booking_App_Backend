const mongoose = require('mongoose');

let isConnected = false;

async function connectDB(uri) {
  if (isConnected) return mongoose.connection;
  if (!uri) throw new Error('MONGODB_URI is not defined');

  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(uri, {
      
    });
    isConnected = true;
    const { host, name } = mongoose.connection;
    console.log(`MongoDB connected: ${host}/${name}`);
    return mongoose.connection;
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    throw err;
  }
}

module.exports = { connectDB };
