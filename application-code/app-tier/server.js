const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// 🔧 Health check route for ALB
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// API route
app.get('/projects', (req, res) => {
  res.json([
    { id: 1, title: "Portfolio Website", description: "Built with React and Node.js" },
    { id: 2, title: "Todo App", description: "Simple todo app" }
  ]);
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

