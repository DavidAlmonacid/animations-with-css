import Header from './Header';
import Rabbit from './Rabbit';
import Mountain from './Mountain';
import Bush from './Bush';
import Cloud from './Cloud';
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

      <Bush />
      <Cloud id='cloud-1' />
      <Cloud id='cloud-2' />
    </div>
  );
};

export default Phone;
