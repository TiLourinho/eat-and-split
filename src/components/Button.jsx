import PropTypes from "prop-types";

function Button({ children }) {
  return <button className="button">{children}</button>;
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
