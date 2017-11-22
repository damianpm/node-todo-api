const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res)=>{
//   console.log(res);
// });

// Todo.findOneAndRemove({_id:'5a156e7e276703cc9854dd60'}).then((todo)=>{
//   console.log(todo);
// }).catch((e)=>{
//   console.log(e);
// });

Todo.findByIdAndRemove('5a156e2f276703cc9854dd5f').then((todo)=>{
  console.log(todo);
}).catch((e)=>{
  console.log(e);
});
