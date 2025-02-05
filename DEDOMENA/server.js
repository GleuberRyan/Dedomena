const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/crud", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  senha: String,
});
const User = mongoose.model("User", UserSchema);


app.use(cors());
app.use(bodyParser.json());


app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});


app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});


app.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(user);
});


app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: "Usuário excluído com sucesso!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});