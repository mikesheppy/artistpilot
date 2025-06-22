const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const content = [
  { id: 1, title: "How to Book a Tour in Nova Scotia", location: "Nova Scotia", genre: "folk", level: "emerging" },
  { id: 2, title: "Sync Licensing for Hip-Hop Artists", location: "Ontario", genre: "hip-hop", level: "established" },
  { id: 3, title: "Funding Resources for East Coast Musicians", location: "Nova Scotia", genre: "any", level: "any" },
  { id: 4, title: "Social Media Tips for Pop Artists", location: "any", genre: "pop", level: "developing" },
  { id: 5, title: "Beginner Guide to Music Royalties", location: "any", genre: "any", level: "emerging" },
];

app.post('/api/recommendations', (req, res) => {
  const { location, genre, level } = req.body;

  const personalized = content.filter(item => {
    const locationMatch = item.location === 'any' || item.location === location;
    const genreMatch = item.genre === 'any' || item.genre === genre;
    const levelMatch = item.level === 'any' || item.level === level;
    return locationMatch && genreMatch && levelMatch;
  });

  res.json(personalized);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});