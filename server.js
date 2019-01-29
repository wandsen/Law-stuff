const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const path = require('path');

const port =  process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

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

app.get('/api/customers', (req, res) => {
  const customers  = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Steve', lastName: 'Smith'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'}
  ];
  
  res.json(customers);

})

app.listen(port, () => console.log(`Server started on port ${port}`));
