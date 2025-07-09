const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Simple endpoint to demonstrate database access.
app.get('/api/top-customers', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT name, orders FROM customers ORDER BY orders DESC LIMIT 10'
    );
    res.json(rows);
  } catch (err) {
    console.error('Error querying MySQL:', err);
    res.status(500).json({ message: 'Database error' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});