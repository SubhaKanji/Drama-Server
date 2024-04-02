const express = require("express");
const router = express.Router();


const { createTodo } = require("../controllers/createTodo");
const {deleteTodo} = require ("../controllers/deleteTodo");
const {getTodo} = require ("../controllers/getTodo");
const {updateTodo} = require ("../controllers/updateTodo");


router.post("/createTodo", createTodo);
router.get("/getTodo",getTodo);
router.delete("/deleteTodo",deleteTodo);
router.put("/updateTodo",updateTodo);


module.exports = router;

//const express = require("express");
// const router = express.Router;


// const {CreateDrama} =require("../controllers/CreateDrama");

// Router.post("/CreateDrama",CreateDrama);

// module.exports = router;
