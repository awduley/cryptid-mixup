require("dotenv").config(); // Load environment variables

const express = require("express");
const app = express();
const cors = require("cors");
const { Pool } = require('pg'); // Use pool for most applications
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Middleware
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5174"] }));

// Configure the pool with SSL settings required for Render connections
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Health check
app.get("/health", (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.get("/posts", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, title, created_at FROM posts ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Database error" });
  }
});

app.post("/posts",  async (req, res) => {
  const { title, slug, body } = req.body;
  if (
    !title ||
    !slug ||
    !body
  ) {
    return res.status(400).json({ okay: false})
  }
  const result = await pool.query(`INSERT INTO posts (title, slug, body) VALUES ($1, $2, $3) RETURNING id, created_at`, [title, slug, body])
    .then(() => res.status(201).json(result.rows[0]))
    .catch(err => console.log("Error:", err));
  
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});

// ffffffffffffffffffffffffrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtg  - Cat