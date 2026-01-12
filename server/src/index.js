// ffffffffffffffffffffffffrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtgrtg  - Cat

require("dotenv").config();

=
"nst ttp://localhost:5174"] }));

app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ ok: true, time: new Date.toISOString() });
});


// In-memory “database” for now (resets when server restarts)
let posts = [];
let nextId = 1;

// Helper: parse/validate :id param
function parseIdParam(req, res) {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    res.status(400).json({ error: "id must be an integer" });
    return null;
  }
  return id;
}

// Get all posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// Get one post by id
app.get("/posts/:id", (req, res) => {
  const id = parseIdParam(req, res);
  if (id === null) return;

  const post = posts.find(p => p.id === id);
  if (!post) {
    return res.status(404).json({ error: "post not found" });
  }
  res.json(post)
});

// POST create a post
app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  if (title == null || content == null) {
    return res.status(400).json({ error: "title and content are required" });
  }

  const cleanTitle = String(title).trim();
  const cleanContent = String(content);

  if (!cleanTitle || !cleanContent) {
    return res.status(400).json({ error: "title and content are required" });
  }

  const newPost = {
    id: nextId++,
    title: cleanTitle,
    content: cleanContent,
    createdAt: new Date().toISOString(),
  };

  posts.push(newPost);

  res.status(201).json(newPost);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});