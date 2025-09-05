import PropTypes from "prop-types";
import Button from "./Button";

function Friend({
  friend: { id, name, image, balance },
  selectedFriend,
  onSelection,
}) {
  const friend = { id, name, image, balance };
  const isSelected = selectedFriend?.id === id;

  function handleClass() {
    return isSelected ? "selected" : "";
  }

  function showLabel() {
    return isSelected ? "Close" : "Select";
  }

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
    <li className={handleClass()}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {showBalance()}
      <Button onClick={() => onSelection(friend)}>{showLabel()}</Button>
    </li>
  );
}

Friend.propTypes = {
  friend: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  onSelection: PropTypes.func,
}.isRequired;

export default Friend;
