const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('in GET route');
    console.log(req.params.id);
    const queryText = `SELECT * from run_history WHERE user_id= $1;`; // needs to be modified to select only for the user sending it.
    pool.query(queryText, [req.params.id])     
        .then((result) => {            
            res.send(result.rows); 
        })
        .catch((err) => {
            console.log('Error completing the GET from run_history', err );
            res.sendStatus(500);
        });     
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {

    console.log(req.body);
    

    // const run = req.body;

    const queryText = `INSERT INTO run_history (user_id, history_name, history_location, workout_description, workout_distance, workout_difficulty, workout_date, workout_rating, workout_id )
        VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9 );`;
  
    pool.query(queryText, [req.body.user_id, req.body.name, req.body.location, req.body.description, req.body.distance, req.body.difficulty, req.body.date, req.body.rating, req.body.id  ])
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error completing POST server query', err);
        res.sendStatus(500);
      });





  // POST route code here
});

module.exports = router;