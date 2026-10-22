const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from CI/CD Pipeline! 🚀</h1><p>Deployed via GitHub Actions</p>');
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'App is running' });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
