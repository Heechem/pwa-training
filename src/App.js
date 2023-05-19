import React, { useEffect } from 'react';
import { useState } from 'react';
import shuffle from './utilities/shuffle';

function App() {
  const [cards, setCards] = useState(shuffle);

  return (
    <div className='App'>
      <div className='grid'></div>
    </div>
  );
}

export default App;
