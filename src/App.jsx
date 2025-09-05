import { useState } from "react";

import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import Button from "./components/Button";
import initialFriends from "./assets/data/friendsList";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((addFriend) => !addFriend);
  }

  function handleAddFriendButton() {
    return showAddFriend ? "Close" : "Add friend";
  }

  function handleAddFriend(friend) {
    setFriends((currFriends) => [...currFriends, friend]);
    handleShowAddFriend();
  }

  return (
    <main className="app">
      <section className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>{handleAddFriendButton()}</Button>
      </section>
      <FormSplitBill />
    </main>
  );
}

export default App;
