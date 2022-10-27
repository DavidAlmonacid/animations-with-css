import Header from './Header';
import Mountain from './Mountain';
import Rabbit from './Rabbit';
import { useState } from 'react';
import './Phone.css';

const Phone = () => {
  const [score, setScore] = useState(0);

  return (
    <div className='phone'>
      <Header score={score} />

      <Rabbit id='rabbit-1' score={score} setScore={setScore} />
      <Rabbit id='rabbit-2' score={score} setScore={setScore} />
      <Mountain id='mountain-1' />

      <Rabbit id='rabbit-3' score={score} setScore={setScore} />
      <Mountain id='mountain-2' />

      <Rabbit id='rabbit-4' score={score} setScore={setScore} />
      <Mountain id='mountain-3' />
    </div>
  );
};

export default Phone;
