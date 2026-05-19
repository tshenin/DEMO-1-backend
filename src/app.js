const express = require('express');

function createApp() {
  const app = express();

  app.get('/hello', (_req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
  });

  return app;
}

module.exports = { createApp };
