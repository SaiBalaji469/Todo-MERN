import React, { useEffect, useState } from "react";
import axios from "axios";

function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  // Fetch Todos
  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:5000/api/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add or Update Todo
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(`http://localhost:5000/api/todos/${editId}`, { title });
      setEditId(null);
    } else {
      await axios.post("http://localhost:5000/api/todos", { title });
    }

    setTitle("");
    fetchTodos();
  };

  // Delete Todo
  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    fetchTodos();
  };

  // Edit Todo
  const editTodo = (todo) => {
    setTitle(todo.title);
    setEditId(todo._id);
  };

  return (
   <div className="container vh-100 d-flex justify-content-center align-items-center" >
    <div className="card shadow p-4 w-100" style={{ maxWidth: "500px" }}>
      
      <h2 className="text-center mb-4 text-primary">
        MERN Todo App
      </h2>

      <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button className="btn btn-primary px-4">
          {editId ? "Update" : "Add"}
        </button>
      </form>
       
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{todo.title}</span>

            <div className="d-flex gap-2">
              <button
                className="btn btn-sm btn-warning"
                onClick={() => editTodo(todo)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteTodo(todo._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

    </div>
</div>

  );
}

export default TodoApp;
