import express from 'express';
const app = express();
const port = 3000;

let requestCount = 0;

// Global middleware to count the number of requests
app.use((req, res, next) => {
  requestCount++;
  console.log(`Request Count: ${requestCount}`);
  next();
});

app.get('/user', (req, res) => {
  res.status(200).json({ name: 'john' });
});

app.post('/user', (req, res) => {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', (req, res) => {
  res.status(200).json({ requestCount });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
