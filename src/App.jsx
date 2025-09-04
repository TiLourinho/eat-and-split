import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import Button from "./components/Button";

function App() {
  return (
    <main className="app">
      <section className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add friend</Button>
      </section>
      <FormSplitBill />
    </main>
  );
}

export default App;
