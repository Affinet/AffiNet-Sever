const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 AffiNet Server is running");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", platform: "AffiNet Myanmar" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
