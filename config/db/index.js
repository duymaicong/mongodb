const mongoose = require('mongoose');
async function connect() {
    console.log('hello')
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('connect success!!!')

    } catch (error) {
        console.log('connect fail!!!');
    }
}

module.exports= { connect };
