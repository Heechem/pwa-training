import React, { useEffect } from 'react';
import { useState } from 'react';
import shuffle from './utilities/shuffle';
import Card from './components/Card';
import Header from './components/Harder';
import UseAppBadge from './hooks/UseAppBadge';

function App() {
  const [wins, setWins] = useState(0);
  const [cards, setCards] = useState(shuffle);
  const [pickOne, setPickOne] = useState(null);
  const [pickTwo, setPickTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [setbadge, clearBadge] = UseAppBadge();

  const handleClick = (card) => {
    if (!disabled) {
      pickOne ? setPickTwo(card) : setPickOne(card);
    }
  };

  // handle the player turn
  const handleTurn = () => {
    setPickOne(null);
    setPickTwo(null);
    setDisabled(false);
  };

  // Reset the game

  const handleNewGame = () => {
    clearBadge();
    setWins(0);
    handleTurn();
    setCards(shuffle);
  };

  // Used for selecting and match handling

  useEffect(() => {
    let pickTimer;
    //Two cards have been clicked

    if (pickOne && pickTwo) {
      // check if the cards are the same
      if (pickOne.image === pickTwo.image) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === pickOne.image) {
              // update card property to check the match
              return { ...card, matched: true };
            } else {
              // No match
              return card;
            }
          });
        });
      } else {
        // Prevent new selection until after delay
        setDisabled(true);
        pickTimer = setTimeout(() => {
          handleTurn();
        }, 1000);
      }
    }
    return () => {
      clearTimeout(pickTimer);
    };
  }, [cards, pickOne, pickTwo]);

  // if the player has found all the matches,handle accordingly

  useEffect(() => {
    // check for any remianing card matches
    const checkWin = cards.filter((card) => !card.matched);

    // All matches made, handle win counter
    if (cards.length && checkWin.length < 1) {
      console.log('you win ');
      setWins(wins + 1);
      handleTurn();
      setCards(shuffle);
      setbadge();
    }
  }, [cards, wins]);

  return (
    <>
      <Header handleNewGame={handleNewGame} wins={wins} />
      <div className='App'>
        <div className='grid'>
          {cards.map((card) => {
            const { image, id, matched } = card;
            return (
              <Card
                key={id}
                card={card}
                image={image}
                onClick={() => handleClick(card)}
                selected={card === pickOne || card === pickTwo || matched}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
