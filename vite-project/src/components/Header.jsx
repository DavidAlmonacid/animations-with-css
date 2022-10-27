import '../assets/fonts/AliceInWonderland/stylesheet.css';
import './Header.css';

const Header = ({ score }) => {
  return (
    <header>
      <h1 className='title'>AnimationLand</h1>
      <h2 className='score'>Score: {score}</h2>
    </header>
  );
};

export default Header;
