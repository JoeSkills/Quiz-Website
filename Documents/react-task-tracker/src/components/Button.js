import PropTypes from 'prop-types';
const onClick = (e) => console.log(e);
const Button = ({ color, text }) => {
  return (
    <button
      className="btn"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  color: 'steelblue',
};
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
