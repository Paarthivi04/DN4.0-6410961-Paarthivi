import React from 'react';

const players = [
  { name: 'Virat', score: 85 },
  { name: 'Rohit', score: 45 },
  { name: 'Gill', score: 73 },
  { name: 'Rahul', score: 65 },
  { name: 'Jadeja', score: 55 },
  { name: 'Hardik', score: 88 },
  { name: 'Ashwin', score: 49 },
  { name: 'Bumrah', score: 91 },
  { name: 'Shami', score: 35 },
  { name: 'Pant', score: 76 },
  { name: 'Surya', score: 64 }
];

const ListofPlayers = () => {
  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((player, idx) => (
          <li key={idx}>
            Mr . {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with Score &lt; 70:</h2>
      <ul>
        {below70.map((player, idx) => (
          <li key={idx}>
            Mr . {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
