const express = require("express");
const router = express.Router();


const { createTodo } = require("../controllers/createTodo");


router.post("/createTodo", createTodo);

module.exports = router;

//const express = require("express");
// const router = express.Router;


// const {CreateDrama} =require("../controllers/CreateDrama");

// Router.post("/CreateDrama",CreateDrama);

// module.exports = router;