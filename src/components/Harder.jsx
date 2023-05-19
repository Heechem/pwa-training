import { useEffect } from 'react';

const Header = ({ handleNewGame, wins }) => {
  // update the title with the count
  useEffect(() => {
    document.title = `${wins} wins`;
  }, [wins]);
  return (
    <header className='header'>
      <h4>{wins} wins</h4>
      <h3>Memory game</h3>
      <button onClick={handleNewGame}>New Game</button>
    </header>
  );
};

export default Header;
