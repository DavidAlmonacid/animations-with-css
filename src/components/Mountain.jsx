import './Mountain.css';

const Mountain = ({ id }) => {
  return (
    <div className='mountain' id={id}>
      <div className='grass'>
        <div className='zigzag'></div>
      </div>
    </div>
  );
};

export default Mountain;
