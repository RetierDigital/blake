import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/support', (req, res) => {
  const input = req.body;
  console.log('Blake received a support request:', input);
  res.json({
    message: "Blake has received your support request.",
    data: input
  });
});

app.get('/', (req, res) => {
  res.send("Blake GPT support backend is live.");
});

app.listen(PORT, () => {
  console.log(`Blake's server running on port ${PORT}`);
});
