const pool = require("../config/db");

const getTodos = async (req, res) => {
  try {
    const todos = await pool.query("SELECT * FROM todo");
    res.json(todos.rows);
  } catch (error) {
    console.log(error);
  }
};

const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id=$1", [id]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

const createTodo = async (req, res) => {
  try {
    const { description } = req.body;

    const newTodo = await pool.query(
      "INSERT INTO todo(description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const { id } = req.params;

    const updatedTodo = await pool.query(
      "UPDATE todo SET description=$1 WHERE todo_id=$2",
      [description, id]
    );
    res.json("Todo was updated");
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await pool.query("DELETE from todo WHERE todo_id=$1", [
      id,
    ]);

    res.json("Todo was deleted");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTodos, getTodo, createTodo, updateTodo, deleteTodo };
