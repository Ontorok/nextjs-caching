const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Json Server Project" });
});
app.get("/products", (req, res) => {
  console.log("hit data source");
  res.json([
    { id: "1", title: "Apple iPhone 16", price: 799 },
    { id: "2", title: "Apple iPhone 16 Plus", price: 899 },
    { id: "3", title: "Apple iPhone 7", price: 899 },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
