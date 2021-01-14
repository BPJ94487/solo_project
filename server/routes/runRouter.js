const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    console.log('in GET route');
    // console.log(req.params.id);
    
    const queryText = `SELECT * from run_history WHERE user_id= $1;`; // needs to be modified to select only for the user sending it.
    pool.query(queryText, [req.params.id])     
        .then((result) => { 
            res.send(result.row); 
        })
        .catch((err) => {
            console.log('Error completing the GET from run_history', err );
            res.sendStatus(500);
        });
        
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;