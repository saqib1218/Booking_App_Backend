const app = require('./src/app');
const config = require('./src/config');
const { connectDB } = require('./src/config/db');

async function start() {
  try {
    if (config.mongoUri) {
      await connectDB(config.mongoUri);
    } else {
      console.warn('MONGODB_URI not set. Running without database connection.');
    }

    app.listen(config.port, () => {
      console.log(`Server running on http://localhost:${config.port}`);
    });
  } catch (err) {
    console.error('Failed to start the server:', err);
    process.exit(1);
  }
}

start();
