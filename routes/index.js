/*
    index.js
    Hamza Khan 100709587 
    Date Completed: 04/04/2020
*/

let express = require('express');
let router = express.Router();

let controllers = require('../controllers/index');

/* ROUTES SECTION */
/*
//Code line 10 - 16 sourced from Krishna Sunday, 17 March 2019
//at https://self-learning-java-tutorial.blogspot.com/2019/03/express-resrenderview-locals-callback.html
const express = require('express');
const path = require('path');
//Put new Express application inside app variable
const app = express();
//Set views property and views engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
*/
/* GET home page. */
router.get('/', (req, res, next) => {
  controllers.displayHome(res);
});

router.get('/home', (req, res, next) => {
  controllers.displayHome(res);
});

/* GET about page */
router.get('/about', (req, res, next) =>
  {
    controllers.displayAbout(res);
});

/* GET contact page */
router.get('/contact', (req, res, next) =>
  {
    controllers.displayContact(res);
});

/* GET products page */
router.get('/projects', (req, res, next) =>
  {
    controllers.displayProjects(res);
});

/* GET services page */
router.get('/services', (req, res, next) =>
  {
    controllers.displayServices(res);
});

/* GET login page */
router.get('/login', (req, res, next) =>
  {
    controllers.displayLogin(res);
});



module.exports = router;
