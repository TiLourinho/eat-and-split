import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";

function App() {
  return (
    <main className="app">
      <section className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add friend</Button>
      </section>
    </main>
  );
}

export default App;
