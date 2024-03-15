const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "foft"
})

//api to get event data
app.get("/", (req, res) => {
    const sql = "SELECT * FROM Events";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

//api to add data (add button in todo)
app.post("/create", (req, res) => {
    const sql = "INSERT INTO Events (title, day_of_week, uid, work_related) VALUES (?)";
    const values = [
        req.body.todo,
        req.body.day,
        req.body.uid,
        req.body.isWork
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json(err);

        }
        return res.json(data);
    })

    const day = req.body.day;
    var dayWord = '';
    if (day == 1) {
        dayWord = 'sundays';
    }
    else if (day == 2) {
        dayWord = 'mondays';
    }
    else if (day == 3) {
        dayWord = 'tuesdays';
    }
    else if (day == 4) {
        dayWord = 'wednesdays';
    }
    else if (day == 5) {
        dayWord = 'thursdays';
    }
    else if (day == 6) {
        dayWord = 'fridays';
    }
    else if (day == 7) {
        dayWord = 'saturdays';
    }
    // console.log("Dayword is " + dayWord);
    const workOrNot = (req.body.isWork) ? "work_tasks = work_tasks+1" : "personal_tasks = personal_tasks + 1";
    const sql2 = "UPDATE Users SET " + dayWord + " = " + dayWord + " + 1, " + workOrNot;
    db.query(sql2, (err, data) => { console.log(err) })
})

//api to delete data (delete button)
app.delete('/todo/:id', (req, res) => {
    var day = 0;
    var sql = "SELECT day_of_week FROM Events WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return res.json(err);
        day = data[0].day_of_week

        var dayWord = '';
        if (day == 1) {
            dayWord = 'sundays';
        }
        else if (day == 2) {
            dayWord = 'mondays';
        }
        else if (day == 3) {
            dayWord = 'tuesdays';
        }
        else if (day == 4) {
            dayWord = 'wednesdays';
        }
        else if (day == 5) {
            dayWord = 'thursdays';
        }
        else if (day == 6) {
            dayWord = 'fridays';
        }
        else if (day == 7) {
            dayWord = 'saturdays';
        }

        sql = "DELETE FROM Events WHERE ID = ?";

        db.query(sql, [id], (err, data) => {
            if (err) return res.json(err);
        })

        const workOrNot = (req.body.isWork) ? "work_tasks = work_tasks-1" : "personal_tasks = personal_tasks - 1";
        sql = "UPDATE Users SET " + dayWord + " = " + dayWord + " - 1, " + workOrNot;

        db.query(sql, (err, data) => {
            if (err) return res.json(err);
        })
    })
})

//api to retrieve user data (for graph, login/profile page)
app.get("/userdat", (req, res) => {
    const sql = "SELECT * FROM Users WHERE ID = 1";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

//listen to make sure this is running
app.listen(8081, () => {
    console.log("Listening!");
})