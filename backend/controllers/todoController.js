// Import Todo model (this is used to interact with MongoDB)
const Todo = require("../models/Todo");


// ===============================
// CREATE a new Todo
// ===============================
exports.createTodo = async (req, res) => {
  // req.body contains data sent from frontend
  // Example: { title: "Learn Node", completed: false }

  // Save the todo data into MongoDB
  const todo = await Todo.create(req.body);

  // Send the saved todo as JSON response
  res.json(todo);
};


// ===============================
// READ all Todos
// ===============================
exports.getTodos = async (req, res) => {
  // Fetch all todo documents from MongoDB
  const todos = await Todo.find();

  // Send todos to frontend
  res.json(todos);
};


// ===============================
// UPDATE a Todo by ID
// ===============================
exports.updateTodo = async (req, res) => {
  // req.params.id gets the todo ID from URL
  // Example URL: PUT /todos/123

  // req.body contains updated data
  // Example: { title: "Learn Express", completed: true }

  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id, // Todo ID
    req.body,      // New data
    { new: true }  // Return updated todo, not old one
  );

  // Send updated todo back to frontend
  res.json(updatedTodo);
};


// ===============================
// DELETE a Todo by ID
// ===============================
exports.deleteTodo = async (req, res) => {
  // Delete todo using ID from URL
  await Todo.findByIdAndDelete(req.params.id);

  // Send confirmation message
  res.json({ message: "Todo Deleted Successfully" });
};
