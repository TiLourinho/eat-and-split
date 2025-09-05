import PropTypes from "prop-types";
import Friend from "./Friend";

function FriendsList({ friends, selectedFriend, onSelection }) {
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend
          key={index}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  selectedFriend: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  onSelection: PropTypes.func,
}.isRequired;

export default FriendsList;
