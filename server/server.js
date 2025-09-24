const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/language-learning', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/lessons', require('./routes/lessons'));
// app.use('/api/progress', require('./routes/progress'));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Language Learning API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});