var ENV = process.env.NODE_ENV || 'development';
console.log('----->>> Env:', ENV);

if (ENV === 'development') {
  process.env.PORT = 9000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
}else if (ENV === 'test') {
  process.env.PORT = 9000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}
