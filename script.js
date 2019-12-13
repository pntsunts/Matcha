const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/Matcha';
mongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology : true}).then((client) =>{
    console.log('Successfully connected');
}).catch((err) => {
    console.log('Could not connect : '+err.message);
});