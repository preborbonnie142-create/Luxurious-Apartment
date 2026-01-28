const path = require("path");
const express = require("express");
const cors = require("cors");

const app =  express();
app.use(cors());
app.use(express.json());
app.use(express.static(Path2D.join(__dirname, "frontend")));

// Test route
app.get("/", (req, res) => {
    res.send("Backend is running...");
    res.sendFile(Path2D.join(__dirname, "frontend", "index.html"));
});

// Simple API
app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from Node.js Backend 🚀"
    });
});

app.get("/api/message", (req, res) => {
    res.json({
        message: "Email Us: luxurioushome@gmail.com"
    })
})

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});