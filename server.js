//Set up express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

//Route imports
const { apiRouter } = require('./routers/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

/*
Set up database
*/
const mongoose = require('mongoose');

let dev_db_url = 'mongodb://dsen:k123456@ds223605.mlab.com:23605/law';

let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, {useNewUrlParser: true});

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//routes
app.use('/api', apiRouter);

//production mode
if(process.env.NODE_ENV === 'production') {
  console.log('server in production mode')
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname = 'client/build/index.html'));
  })
}

// //build mode
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/public/index.html'));
// })


const port =  process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
