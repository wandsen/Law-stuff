// npm packages
const express = require('express');

// globals
const router = express.Router();

// Models
const { Api } = require ('../models/index');

router
  .route('/customers')
  .get(('/customers', (req, res) => {
    const customers  = [
      {id: 1, firstName: 'John', lastName: 'Doe'},
      {id: 2, firstName: 'Steve', lastName: 'Smith'},
      {id: 3, firstName: 'Mary', lastName: 'Swanson'}
    ];
    
    res.json(customers);

    }));

router
.route('/test')
  .get((req, res) => {
    Api.find( {}, (err, client) =>{
      res.json(client)
    })
  })
  .post((req, res) => {
    let client = new Api ({name: 'John'})
    client.save((err) => {
      if(err){
        console.log(err);
        return;
      }
      res.status(201).send(client)
    })
    
  })

module.exports = router;