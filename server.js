// server.js
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.static("public")); // to serve HTML/CSS/JS
app.use(express.json()); // to handle JSON input

// 🔹 GET all colleges
app.get("/colleges", (req, res) => {
  const sql = "SELECT * FROM colleges";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// 🔹 Add more API routes later (filter, search, add)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});