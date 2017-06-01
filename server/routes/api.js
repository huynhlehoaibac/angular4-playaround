var express = require('express');
var mongojs = require('mongojs');

var router = express.Router();
var db = mongojs('mongodb://dbadmin:dbadminpassword@ds157631.mlab.com:57631/mytasklistdb', ['tasks']);

router.get('*', (req, res, next) => {
    console.log(req.originalUrl);
    next();
});

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
})

// Get all tasks list
router.get('/tasks', (req, res) => {
    db.tasks.find((err, tasks) => {
        if (err) {
            res.send(err);
        }
        res.json(tasks);
    })
});

// Get task
router.get('/task/:id', (req, res) => {
    db.tasks.findOne({ _id: mongojs.ObjectId(req.params.id)}, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
});

module.exports = router;