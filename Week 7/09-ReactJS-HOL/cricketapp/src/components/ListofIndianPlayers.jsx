import React from 'react';

const T20players = ['Virat', 'Rohit', 'Gill', 'Pant'];
const RanjiTrophyPlayers = ['Pujara', 'Rahane', 'Jadeja', 'Ashwin'];

const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

const ListofIndianPlayers = () => {
  const evenTeam = mergedPlayers.filter((_, index) => index % 2 === 0);
  const oddTeam = mergedPlayers.filter((_, index) => index % 2 !== 0);

  return (
    <div>
      <h2>Merged Players:</h2>
      <ul>
        {mergedPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>

      <h3>Even Index Players:</h3>
<ul>
  {evenTeam.map((player, idx) => {
    const labels = ["Second", "Fourth", "Sixth", "Eighth"];
    return (
      <li key={idx}>
        {labels[idx] ? `${labels[idx]}: ${player}` : player}
      </li>
    );
  })}
</ul>

      <h3>Odd Index Players:</h3>
    <ul>
  {oddTeam.map((player, idx) => {
    const labels = ["First", "Third", "Fifth", "Seventh"];
    return (
      <li key={idx}>
        {labels[idx] ? `${labels[idx]}: ${player}` : player}
      </li>
    );
  })}
</ul>
    </div>
  );
};

export default ListofIndianPlayers;
