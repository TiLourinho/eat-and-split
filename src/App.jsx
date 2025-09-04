import { useState } from "react";

import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import Button from "./components/Button";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((addFriend) => !addFriend);
  }

  function handleAddFriendButton() {
    return showAddFriend ? "Close" : "Add friend";
  }

  return (
    <main className="app">
      <section className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>{handleAddFriendButton()}</Button>
      </section>
      <FormSplitBill />
    </main>
  );
}

export default App;
