const pool = require("./database");

const create = async (description) => {
  return pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [
    description,
  ]);
};

const get = async () => {
  return pool.query("SELECT * FROM todo");
};

const update = async () => {};

const remove = async (id) => {
  return pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
};

module.exports = {
  create,
  get,
  update,
  remove,
};
