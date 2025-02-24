const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Serve entire "public" folder as static
app.use(express.static(path.join(__dirname, "public")));

// ✅ Serve "index.html" when visiting "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ Example API route (if needed)
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from OpenTelemetry Node.js Backend!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});