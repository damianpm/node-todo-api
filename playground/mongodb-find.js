const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db)=>{
  if (error) {
    return console.log('Error: ', error);
  }

  console.log('Connected to Mongo DB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a12c1826b6baee0583641c4')
  // }).toArray().then((docs)=>{
  //   console.log('Todos: ');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error)=>{
  //   console.log('Error: ', error);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count: ${count}`);
  // }, (error)=>{
  //   console.log('Error: ', error);
  // });

  db.collection('Users').find({name: 'Damian'}).toArray().then((docs)=>{
    console.log(`Documents with name Damian:`);
    console.log(JSON.stringify(docs, undefined, 2));
  },(error)=>{
    console.log('Error: ', error);
  });

  // db.close();
});
