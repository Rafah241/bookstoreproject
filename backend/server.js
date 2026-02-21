const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // IMPORTANT

app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
app.get("/books", (req, res) => {
  res.json([
    { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, title: "Atomic Habits", author: "James Clear" },
    { id: 3, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" }
  ]);
});
const books = [
  { id: 1, title: "The Alchemist", genre: "Fiction" },
  { id: 2, title: "Atomic Habits", genre: "Self-Help" },
  { id: 3, title: "Rich Dad Poor Dad", genre: "Finance" },
  { id: 4, title: "Think and Grow Rich", genre: "Finance" },
  { id: 5, title: "The Power of Habit", genre: "Self-Help" }
];

// Recommendation API
app.get("/recommend/:genre", (req, res) => {
  const genre = req.params.genre;

  const recommended = books.filter(
    book => book.genre.toLowerCase() === genre.toLowerCase()
  );

  res.json(recommended);
});