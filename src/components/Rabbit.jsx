import RabbitHead from './RabbitHead';
import './Rabbit.css';

const Rabbit = ({ id, score, setScore }) => {
  return (
    <div className='rabbit' id={id}>
      <RabbitHead score={score} setScore={setScore} />
    </div>
  );
};

export default Rabbit;
