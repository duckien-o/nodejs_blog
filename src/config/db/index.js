const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/BOG_DEV', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
      console.log('đúng nè !!')
    } catch (error) {
        console.log('Failed to connect  foo to MongoDB:');
    }
}

module.exports = { connect };
