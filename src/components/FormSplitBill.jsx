import { useState } from "react";
import PropTypes from "prop-types";

import Button from "./Button";

function FormSplitBill({ selectedFriend: { name } }) {
  const [bill, setBill] = useState("");
  const [paidByuser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("User");

  const paidByFriend = bill ? bill - paidByuser : "";

  function handleInput({ target: { value, id } }) {
    if (id === "bill") setBill(Number(value));
    else if (id === "user")
      setPaidByUser(Number(value) > bill ? paidByuser : Number(value));
    else if (id === "payer") setWhoIsPaying(value);
  }

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {name}</h2>
      <label htmlFor="bill">💰 Bill value</label>
      <input
        type="text"
        id="bill"
        value={bill}
        onChange={(event) => handleInput(event)}
      />
      <label htmlFor="user">🧍🏻 Your expense</label>
      <input
        type="text"
        id="user"
        value={paidByuser}
        onChange={(event) => handleInput(event)}
      />
      <label htmlFor="friend">🧑🏻‍🤝‍👩🏼 {name}&apos;s expense</label>
      <input type="text" id="friend" value={paidByFriend} disabled />
      <label htmlFor="payer">🧑🏻‍🤝‍👩🏼 Who is paying the bill?</label>
      <select
        id="payer"
        value={whoIsPaying}
        onChange={(event) => handleInput(event)}
      >
        <option value="user">You</option>
        <option value="friend">{name}</option>
      </select>

      <Button>Add</Button>
    </form>
  );
}

FormSplitBill.propTypes = {
  selectedFriend: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};

export default FormSplitBill;
