const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log(req.params.id);

    const queryText= `DELETE FROM future_progress * WHERE serial_id = $1;`
    pool.query(queryText, [req.params.id])
    .then((result) => {            
        res.send(result.rows); 
    })
    .catch((err) => {
        console.log('Error completing the DELETE from run_history', err );
        res.sendStatus(500);
    });      
});


router.get('/:id', rejectUnauthenticated, (req, res) => {
    // console.log('in GET route');
    // console.log(req.params.id);
    
    const queryText = `SELECT * from future_progress WHERE user_id= $1;`; // needs to be modified to select only for the user sending it.
    pool.query(queryText, [req.params.id])     
        .then((result) => {            
            res.send(result.rows); 
        })
        .catch((err) => {
            console.log('Error completing the GET from run_history', err );
            res.sendStatus(500);
        });      
});


router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body);    
    const queryText = `INSERT INTO future_progress ( workout_name, workout_location, workout_description, workout_distance, workout_difficulty, user_id )
    VALUES ( $1, $2, $3, $4, $5, $6 );`;
    pool.query(queryText, [req.body.name, req.body.location, req.body.description, req.body.distance, req.body.difficulty, req.body.user_id  ])
    .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error completing POST server query', err);
        res.sendStatus(500);
      }); 
});


router.put('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body);
    const queryText = `UPDATE future_progress SET workout_name = $1, workout_location = $2 , workout_description = $3, workout_distance = $4, workout_difficulty = $5
     WHERE serial_id = $6;`
    pool.query(queryText, [req.body.name, req.body.location, req.body.description, req.body.distance, req.body.difficulty, req.body.serial_id])
    .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error completing POST server query', err);
        res.sendStatus(500);
      }); 
});

module.exports = router;