import express from "express";

const jokes = [
  {
    id: 1,
    title: "Chicken Crossed the Road",
    joke: "Why did the chicken cross the road? To get to the other side!",
  },
  {
    id: 2,
    title: "Mathematical Monkey",
    joke: "Why was the math book sad? Because it had too many problems.",
  },
  {
    id: 3,
    title: "Coffee Talk",
    joke: "Why don't coffee jokes ever work? Because they always end up getting filtered.",
  },
  {
    id: 4,
    title: "Pirate Parrot",
    joke: "What's a pirate's favorite letter? You might think it's R, but it's actually the C they love.",
  },
  {
    id: 5,
    title: "Light Bulb Moment",
    joke: "How many software engineers does it take to change a light bulb? None, that's a hardware problem!",
  },
];

const app = express();
const port = process.env.PORT || 4000;
app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

app.listen(port, (req, res) => {
  console.log(`Server is listening at http://localhost:${port}`);
});
