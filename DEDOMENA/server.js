const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Conexão com o MongoDB
mongoose.connect("mongodb://localhost:27017/crud", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Modelo do MongoDB
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  senha: String,
});
const User = mongoose.model("User", UserSchema);

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas CRUD
// CREATE
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

// READ
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// UPDATE
app.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(user);
});

// DELETE
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: "Usuário excluído com sucesso!" });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});