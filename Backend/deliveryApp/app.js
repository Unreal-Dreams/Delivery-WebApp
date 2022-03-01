const express = require("express");
const bodyParser = require("body-parser");
const mySql = require("mysql");
const fileUpload = require("express-fileupload");
const exphbs = require("express-handlebars"); // updated to 6.0.X
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("public"));
app.use(express.static("upload"));
//MySQL Code

const pool = mySql.createPool({
  connectionLimit: 10, //maximum no of connection
  host: "localhost",
  user: "root",
  password: "",
  database: "deliveryapp",
});

//Get all Rows
app.get("/users", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("connection id " + connection.threadId);

    // query(sqlString, callback)
    connection.query("SELECT * FROM users", (err, rows) => {
      connection.release(); // return connection to pool

      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});

//get by id

// app.get("/users/:id", (req, res) => {
//   pool.getConnection((err, connection) => {
//     if (err) console.log(err);
//     console.log("connection id " + connection.threadId);

//     // query(sqlString, callback)
//     connection.query(
//       "SELECT * FROM users where id = ?",
//       [req.params.id],
//       (err, rows) => {
//         connection.release(); // return connection to pool

//         if (!err) {
//           res.send(rows);
//         } else {
//           console.log(err);
//         }
//       }
//     );
//   });
// });

//get by email

app.get("/users/:email", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("connection id for getting by" + connection.threadId);
    console.log("calling get by email");
    // query(sqlString, callback)
    connection.query(
      "SELECT * FROM users where email = ?",
      [req.params.email],
      (err, rows) => {
        connection.release(); // return connection to pool

        if (!err) {
          res.send(rows);
        } else {
          console.log(err);
        }
      }
    );
  });
});

//delete a record
app.delete("/users/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("connection id " + connection.threadId);

    // query(sqlString, callback)
    connection.query(
      "DELETE FROM users where id = ?",
      [req.params.id],
      (err, rows) => {
        connection.release(); // return connection to pool

        if (!err) {
          res.send(
            `user with the record id: ${[req.params.id]} has been deleted`
          );
        } else {
          console.log(err);
        }
      }
    );
  });
});

//post a user record
app.post("", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("connection id " + connection.threadId);

    // query(sqlString, callback)
    const params = req.body;

    connection.query("INSERT INTO users set ?", params, (err, rows) => {
      connection.release(); // return connection to pool

      if (!err) {
        res.send(`user with the record name: ${params.name} has been added`);
      } else {
        console.log(err);
      }
    });
    console.log(req.body);
  });
});

//--------------------------------------------------------------------Now we will work on orders table-------------------------------------------------------------------//

//Get all Rows i.e all orders
app.get("/orders", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("connection id " + connection.threadId);

    // query(sqlString, callback)
    connection.query("SELECT * FROM orders", (err, rows) => {
      connection.release(); // return connection to pool

      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});

//get all orders by an emailId. ie particular user

app.get("/orders/:email", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("connection id for getting by" + connection.threadId);
    console.log("calling get by email");
    // query(sqlString, callback)
    connection.query(
      "SELECT * FROM orders where email = ?",
      [req.params.email],
      (err, rows) => {
        connection.release(); // return connection to pool

        if (!err) {
          res.send(rows);
        } else {
          console.log(err);
        }
      }
    );
  });
});

//post a user parcel order
app.post("/orders/id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("connection id " + connection.threadId);

    // query(sqlString, callback)
    const params = req.body;

    connection.query("INSERT INTO orders set ?", params, (err, rows) => {
      connection.release(); // return connection to pool

      if (!err) {
        res.send(`order with the record name: ${params.type} has been added`);
      } else {
        console.warn("Post request of order failed");
        console.log(err);
      }
    });
    console.log(req.body);
  });
});

//New Post method

// app.post("/orders/wakadoodle", (req, res) => {
//   let sampleFile;
//   let uploadPath;

//   if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).send("No files were uploaded.");
//   }

//   // name of the input is sampleFile
//   sampleFile = req.files.sampleFile;
//   uploadPath = __dirname + "/upload/" + sampleFile.name;

//   console.warn("Checking sample file", sampleFile);

//   // Use mv() to place file on the server
//   sampleFile.mv(uploadPath, function (err) {
//     if (err) return res.status(500).send(err);

//     connection.query(
//       'UPDATE user SET profile_image = ? WHERE id ="1"',
//       [sampleFile.name],
//       (err, rows) => {
//         if (!err) {
//           res.redirect("/");
//         } else {
//           console.log(err);
//         }
//       }
//     );
//   });
// });

//--------------------------------------------------------------------Now we will work on Feedback Table-------------------------------------------------------------------//

app.post("/feedback", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("connection id " + connection.threadId);

    // query(sqlString, callback)
    const params = req.body;

    connection.query("INSERT INTO Feedback set ?", params, (err, rows) => {
      connection.release(); // return connection to pool

      if (!err) {
        res.send(
          `feedback with the record name: ${params.email} has been added`
        );
      } else {
        console.warn("Post request of order failed");
        console.log(err);
      }
    });
    console.log(req.body);
  });
});

//listen on port 5000
console.log(port);
app.listen(port, () => console.log(`Listen on Port ${port}`));
