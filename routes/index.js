var express = require('express');
var router = express.Router();
var Class = require('../models/class');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   Class.getClasses(function(err, classes) {
//     res.render('index', { title: 'My Virtual Classroom', classes: classes });
//   }, 4);
// });

router.get("/", function (req,res) {
  res.render("index", {title: 'My Virtual Classroom'})
})
// ----------------Courses--------------
router.get("/courses", function (req,res) {
  res.render("courses/courses", {title: 'All Courses'})
})
router.get("/HCI", function (req,res) {
  res.render("courses/courses-single", {title: 'Human Computer Interaction'})
})
router.get("/HCI-user", function (req,res) {
  res.render("courses/courses-enrolled", {title: 'HCI Class'})
})

// --------------Teachers----------------
router.get("/teachers", function (req,res) {
  res.render("instructors/teachers", {title: 'Our Teachers'})
})

router.get("/teachers-detail", function (req,res) {
  res.render("instructors/teacher-detail", {title: 'Teachers Deatils'})
})

//-----------------About-------------------
router.get("/about", function (req,res) {
  res.render("public-views/about", {title: 'About Developers'})
})

//---------------------Events--------------

router.get("/events", function (req,res) {
  res.render("logged-user-views/events", {title: 'All Events'})
})
router.get("/events-detail", function (req,res) {
  res.render("logged-user-views/events-detail", {title: 'Events Detail'})
})

//-----------------------Contact Us---------

router.get("/contact", function (req,res) {
  res.render("logged-user-views/contact", {title: 'Contact Us'})
})

module.exports = router;
