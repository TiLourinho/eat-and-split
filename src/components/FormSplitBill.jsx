import PropTypes from "prop-types";

import Button from "./Button";

function FormSplitBill({ selectedFriend: { name } }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {name}</h2>
      <label htmlFor="bill">💰 Bill value</label>
      <input type="text" id="bill" />
      <label htmlFor="user">🧍🏻 Your expense</label>
      <input type="text" id="user" />
      <label htmlFor="friend">🧑🏻‍🤝‍👩🏼 {name}&apos;s expense</label>
      <input type="text" id="friend" disabled />
      <label htmlFor="payer">🧑🏻‍🤝‍👩🏼 Who is paying the bill?</label>
      <select id="payer">
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
