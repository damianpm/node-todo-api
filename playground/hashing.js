const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123';

// bcrypt.genSalt(10, (err, salt)=>{
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });


var hashedPassword = '$2a$10$GWRYxZP3ZhZPXjtM54mOPOz30VHt1b8.XF55wf4tJ0eLtMRkHniGa';

bcrypt.compare(password, hashedPassword, (err, res)=>{
  console.log(res);
});
//
// var data = {
//   id:10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc')
// console.log('Decoded ----------------------');
// console.log(decoded);

// var message = 'I am a patito';
// var hash = SHA256(message).toString();
//
// console.log('Message: ', message);
// console.log('Hash: ', hash);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data)).toString()
// }
