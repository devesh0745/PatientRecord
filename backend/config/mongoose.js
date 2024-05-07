//connecting to db.
const mongoose=require('mongoose');

mongoose.connect('mongodb://0.0.0.0/patient_db');

const db=mongoose.connection;
db.on('err',console.error.bind('console',error));

db.once('open',function(){
    console.log('Connected to DB::MongoDB')
});
module.exports=db;