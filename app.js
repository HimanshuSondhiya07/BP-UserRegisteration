const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

app.use('/api/user', userRoutes);

// Error handling middleware should be the last middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
