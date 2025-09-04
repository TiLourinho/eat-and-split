import friendsList from "../assets/data/friendsList";
import Friend from "./Friend";

function FriendsList() {
  const friends = friendsList;

  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend key={index} friend={friend} />
      ))}
    </ul>
  );
}

export default FriendsList;
