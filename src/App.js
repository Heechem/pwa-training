import React, { useEffect } from 'react';
import { useState } from 'react';
import shuffle from './utilities/shuffle';
import Card from './components/Card';

function App() {
  const [cards, setCards] = useState(shuffle);

  return (
    <div className='App'>
      <div className='grid'>
        {cards.map((card) => {
          const { image, id, matched } = card;
          return <Card key={id} image={image} selected={false} />;
        })}
      </div>
    </div>
  );
}

export default App;
