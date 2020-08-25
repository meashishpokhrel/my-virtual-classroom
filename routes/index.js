var express = require('express');
var router = express.Router();
var Class = require('../models/class');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   Class.getClasses(function(err, classes) {
//     res.render('index', { title: 'My Virtual Classroom', classes: classes });
//   }, 4);
// });

router.get("/",function (req,res) {
  res.render("index",  {title: 'My Virtual Classroom'})
})
// ----------------Courses--------------
router.get("/courses", isLoggedIn,function (req,res) {
  res.render("courses/courses", {title: 'All Courses'})
})
router.get("/HCI", isLoggedIn,function (req,res) {
  res.render("courses/courses-single", {title: 'Human Computer Interaction'})
})
router.get("/HCI-user", isLoggedIn,function (req,res) {
  res.render("courses/courses-enrolled", {title: 'HCI Class'})
})

// --------------Teachers----------------
router.get("/teachers", isLoggedIn,function (req,res) {
  res.render("instructors/teachers", {title: 'Our Teachers'})
})

router.get("/teachers-detail",isLoggedIn, function (req,res) {
  res.render("instructors/teacher-detail", {title: 'Teachers Deatils'})
})

//-----------------About-------------------
router.get("/about", isLoggedIn,function (req,res) {
  res.render("public-views/about", {title: 'About Developers'})
})

//---------------------Events--------------

router.get("/events",isLoggedIn, function (req,res) {
  res.render("logged-user-views/events", {title: 'All Events'})
})
router.get("/events-detail", isLoggedIn,function (req,res) {
  res.render("logged-user-views/events-detail", {title: 'Events Detail'})
})

//-----------------------Contact Us---------

router.get("/contact", isLoggedIn,function (req,res) {
  res.render("logged-user-views/contact", {title: 'Contact Us'})
})
//-----------------------User Profile---------

router.get("/profile", isLoggedIn,function (req,res) {
  res.render("public-views/myprofile", {title: 'My Profile'})
})

//-------------------Teacher Panel----------------------
router.get("/teacher-panel", isLoggedIn,function (req,res) {
  res.render("instructors/teacher-panel", {title: 'My Profile'})
})


// Access Control
function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  } else {
    req.flash('You must login to access this page.');
    res.redirect('index');
  }
};
module.exports = router;

module.exports = router;
