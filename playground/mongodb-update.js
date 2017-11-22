const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Error: ', error);
  }

  console.log('Connected to Mongo DB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a12cd506b6baee0583641d0')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((res)=>{
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a12d1166b6baee0583641d1')
  }, {
    $set: {
      name: 'Malvi'
    },
    $inc: {
      age: 1
    }
  }, {returnOriginal: false}).then((res) => {
    console.log(res);
  });

  // db.close();
});
