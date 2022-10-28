import './RabbitHead.css';

const RabbitHead = ({ score, setScore }) => {
  const handleClick = () => setScore(score + 1);

  return (
    <button className='rabbit-head' onClick={handleClick}>
      <div className='rabbit-head__ears'></div>
      <div className='rabbit-head__face'>
        <div className='rabbit-head__eyes'></div>
      </div>
    </button>
  );
};

export default RabbitHead;
