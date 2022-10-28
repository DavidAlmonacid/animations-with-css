import './Cloud.css';

const Cloud = ({ id }) => {
  return (
    <div className='cloud' id={id}>
      <div className='cloud__top'></div>
      <div className='cloud__bottom'></div>
    </div>
  );
};

export default Cloud;
