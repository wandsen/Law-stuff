const express = require('express');

const router = express.Router();

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
router.comment = ()=>{
  console.log('some comment')
}
module.exports = router;