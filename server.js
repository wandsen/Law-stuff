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
