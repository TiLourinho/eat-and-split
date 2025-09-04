import PropTypes from "prop-types";
import Button from "./Button";

function Friend({ friend: { name, image, balance } }) {
  function showBalance() {
    if (balance < 0) {
      return (
        <p className="red">
          You owe {name} {Math.abs(balance)}€
        </p>
      );
    } else if (balance > 0) {
      return (
        <p className="green">
          {name} owes you {Math.abs(balance)}€
        </p>
      );
    } else {
      return <p>You and {name} are even</p>;
    }
  }

  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {showBalance()}
      <Button>Select</Button>
    </li>
  );
}

Friend.propTypes = {
  friend: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

export default Friend;
