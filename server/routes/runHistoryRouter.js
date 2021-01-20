const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT * from run_history WHERE user_id= $1 ORDER BY workout_date;`; // needs to be modified to select only for the user sending it.
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
    console.log(req.body)
    const queryText = `INSERT INTO run_history (user_id, history_name, history_location, workout_description, workout_distance, workout_difficulty, workout_date, workout_rating, workout_id, start_time, end_time )
        VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`;

    pool.query(queryText, [req.body.user_id, req.body.name, req.body.location, req.body.description, req.body.distance, req.body.difficulty, req.body.date, req.body.rating, req.body.id, req.body.departureTime, req.body.returnTim  ])
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error completing POST server query', err);
        res.sendStatus(500);
      });  
});


router.put('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body);
    const queryText = `UPDATE run_history SET history_name = $1, history_location = $2, workout_description = $3, workout_distance = $4, workout_difficulty = $5, workout_date = $6, workout_rating = $7
        WHERE Serial_id = $8;`;
    pool.query(queryText, [req.body.name, req.body.location, req.body.description, req.body.distance, req.body.difficulty, req.body.date, req.body.difficulty, req.body.serial_id])
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
        console.log('Error completing POST server query', err);
        res.sendStatus(500);
    });  
});


router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('what to delete', req.params.id);
    const queryText = `DELETE FROM run_history * WHERE serial_id = $1;`;
    pool.query(queryText, [req.params.id])
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
        console.log('Error completing DELETE server query', err);
        res.sendStatus(500);
    });   
})

module.exports = router;