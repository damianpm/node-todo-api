var ENV = process.env.NODE_ENV || 'development';
// console.log('----->>> Env:', ENV);

if (ENV === 'development' || ENV === 'test') {
  var config = require('./config.json');
  var envConfig = config[ENV];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key]
  });

}

// if (ENV === 'development') {
//   process.env.PORT = 9000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
// }else if (ENV === 'test') {
//   process.env.PORT = 9000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
// }
