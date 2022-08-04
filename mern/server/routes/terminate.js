const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 

 
// This section will help you get a list of all the records.
recordRoutes.route("/terminates").get(function (req, res) {
 let db_connect = dbo.getDb("employees");
 db_connect
   .collection("terminate")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
recordRoutes.route("/terminates/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("terminate")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

// This section will help you create a new record.
recordRoutes.route("/terminates/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  address: req.body.address,
  email: req.body.email,
  contact: req.body.contact,

 };
 db_connect.collection("terminate").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    email: req.body.email,
    contact: req.body.contact,
   },
 };
 db_connect
   .collection("terminate")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("terminate").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = recordRoutes;