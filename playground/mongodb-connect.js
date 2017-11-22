const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db)=>{
  if (error) {
    return console.log('Error: ', error);
  }

  console.log('Connected to Mongo DB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) =>{
  //   if (err) {
  //     return console.log('Unable to insert todo: ', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   // _id: 123456,
  //   name: 'Damian',
  //   age: 39,
  //   location: 'Sabadell'
  // }, (error, result)=>{
  //   if (error) {
  //     return console.log('Unable to insert user: ', error);
  //   }
  //
  //   console.log('User successfully added:');
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
