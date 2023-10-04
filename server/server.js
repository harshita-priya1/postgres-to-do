const PORT = process.env.PORT || 8000;
const express = require("express");

const pool = require("./db");

const app = express();

//get all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await pool.query("SELECT * FROM todos");
    res.json(todos.rows);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on  PORT ${PORT}`);
});
