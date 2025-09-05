import PropTypes, { object } from "prop-types";
import Friend from "./Friend";

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend key={index} friend={friend} />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(object).isRequired,
};

export default FriendsList;
