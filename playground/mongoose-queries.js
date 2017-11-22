const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const _id = '5a1418682a2587e422a5783a-11';
//
// if (!ObjectID.isValid(_id)) {
//   console.log('ID is not valid');
// }
// Todo.find({_id}).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({_id}).then((todo)=>{
//   console.log('Todo', todo);
// });

// Todo.findById(_id).then((todo)=>{
//   if (!todo) {
//     return console.log('id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e)=>console.log(e));


User.findById('5a12f730efc907d0194a67eb').then((user)=>{
  if (!user) {
    return console.log('User not found');
  }

  console.log('User: ', user);

}).catch((e)=>{
  console.log('Error: ', e);
});
