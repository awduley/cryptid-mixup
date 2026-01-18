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

pool.query("SELECT 1 AS test;")
  .then(r => console.log("DB ok:", r.rows[0]))
  .catch(err => console.error("DB error:", err));

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


app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});

// ffffffffffffffffffffffffrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtg  - Cat