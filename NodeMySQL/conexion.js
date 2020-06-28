const { body, param, validationResult } = require('express-validator');
const { Router }= require('express');

var admin = require("firebase-admin");
const connection = require("./miconfige")

const express = require('express')


const db = admin.database();
var router = express.Router()
var ref = db.ref("user");

module.exports = router;

var rootRef = admin.database().ref();
   
        
router.get('/usuario', [], (req, res) => {
  ref.orderByKey().once("child_added", function(snapshot) {
    console.log(snapshot.key);
    res.json(snapshot);
  });
 });
 router.post('/usuario', [
  function writeUserData(cellphone, contact, lastname, name) {
    firebase.database().ref('usuario').set({
      cellphone: cellphone,
      contact: contact,
      lastname: lastname,
      name: name
    });
  }
  ], (req, res) => {
 const errors = validationResult(req);
 if (!errors.isEmpty()) {
 res.json({success:false,err:JSON.stringify(errors)})
 return
 }
});