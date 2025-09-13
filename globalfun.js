import express from 'express';
const app = express();
const port = 3000;

const numberOfRequestsForUser = {};

// Helper function to generate random user IDs
function generateRandomUserId() {
  return Math.floor(Math.random() * 1000000).toString();
}

console.log(numberOfRequestsForUser);
// Reset request counts every second
setInterval(() => {
  for (let userId in numberOfRequestsForUser) {
    numberOfRequestsForUser[userId] = 0;
  }
}, 1000);

// Rate Limiting Middleware
app.use((req, res, next) => {
  let userId = req.headers['user-id'];

  // Generate random userId if not provided (for testing/demo purposes)
  if (!userId) {
    userId = generateRandomUserId();
    console.log(`Generated random user-id: ${userId}`);
  }

  numberOfRequestsForUser[userId] = (numberOfRequestsForUser[userId] || 0) + 1;

  if (numberOfRequestsForUser[userId] > 5) {
    return res.status(404).send('Rate limit exceeded');
  }

  next();
});

let requestCount = 0;

// Request Counting Middleware
app.use((req, res, next) => {
  requestCount++;
  console.log(`Request Count: ${requestCount}`);
  next();
});

// Example routes
app.get('/user', (req, res) => {
  res.status(200).json({ name: 'john' });
});

app.post('/user', (req, res) => {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', (req, res) => {
  res.status(200).json({ requestCount });
});

// Start server
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
