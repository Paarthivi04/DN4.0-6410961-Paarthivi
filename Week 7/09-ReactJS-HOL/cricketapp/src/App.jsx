import React, { useState } from 'react';
import ListofPlayers from './components/ListofPlayers';
import ListofIndianPlayers from './components/ListofIndianPlayers';

const App = () => {
  const [flag, setFlag] = useState(true);

  const toggleView = () => setFlag(!flag);

  return (
    <div>
      <h1>Cricket App</h1>
      <button onClick={toggleView}>
        {flag ? 'Show Indian Players' : 'Show All Players'}
      </button>
      {flag ? <ListofPlayers /> : <ListofIndianPlayers />}
    </div>
  );
};

export default App;
