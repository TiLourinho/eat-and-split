import { useState } from "react";
import PropTypes from "prop-types";

import Button from "./Button";
import generateId from "../utils/helpers";

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?");

  function handleInput({ target: { value, id } }) {
    if (id === "name") setName(value);
    else if (id === "image") setImage(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !image) return;

    const id = generateId();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48?");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="name">🧑🏻‍🤝‍👩🏼 Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => handleInput(event)}
        autoComplete="false"
      />
      <label htmlFor="image">🖼️ Image URL</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(event) => handleInput(event)}
      />
      <Button>Add</Button>
    </form>
  );
}

FormAddFriend.propTypes = {
  onAddFriend: PropTypes.func.isRequired,
};

export default FormAddFriend;
