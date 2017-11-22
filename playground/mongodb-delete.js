const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db)=>{
  if (error) {
    return console.log('Error: ', error);
  }

  console.log('Connected to Mongo DB server');

  // db.collection('Todos').deleteMany({text : 'Eat lunch'}).then((res)=>{
  //   console.log(res);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res)=>{
  //   console.log('-------------------------->>>>>>>>>>>>>>>>>>>>>');
  //   console.log(res);
  // }, (error)=>{
  //   console.log('Error: ', error);
  // });

  // db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>{
  //   console.log(res);
  // });

  // db.collection('Users').deleteMany({name: 'Pepe'}).then((res)=>{
  //   console.log(res);
  // }, (err)=>{
  //   console.log('-------------------->>>>>>>>>>>> Error: ', err);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5a12d1506b6baee0583641d2')}).then((res)=>{
    console.log(JSON.stringify(res, undefined, 2));
  });


  // db.close();
});
