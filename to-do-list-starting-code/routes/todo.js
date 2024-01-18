const express = require("express");
const { createTodo, readTodo, removeTodo } = require("../controller");

const router = express.Router();

router.post("/todo/create", createTodo);

router.get("/todos", readTodo);

router.delete("/todo/:id", removeTodo);

module.exports = router;
