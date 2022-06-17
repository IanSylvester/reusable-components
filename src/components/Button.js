const Button = (props) => {
  const { text, onClick } = props;
  return (
    <div className="btn">
      <button className='basicBtn' onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
export default Button;
