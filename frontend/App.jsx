import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState({ location: '', genre: '', level: '' });
  const [content, setContent] = useState([]);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const getRecommendations = async () => {
    const res = await axios.post('http://localhost:5000/api/recommendations', user);
    setContent(res.data);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">ArtistPilot</h1>
      <div className="space-y-2">
        <input
          type="text"
          name="location"
          placeholder="Your location (e.g., Nova Scotia)"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre (e.g., folk, hip-hop)"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <select name="level" onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select Level</option>
          <option value="emerging">Emerging</option>
          <option value="developing">Developing</option>
          <option value="established">Established</option>
        </select>
        <button onClick={getRecommendations} className="bg-blue-500 text-white px-4 py-2 rounded">
          Get Content
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Recommended Content:</h2>
        <ul className="list-disc ml-5">
          {content.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;