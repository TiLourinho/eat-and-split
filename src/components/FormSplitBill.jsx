import Button from "./Button";

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with friend</h2>
      <label htmlFor="bill">💰 Bill value</label>
      <input type="text" id="bill" />
      <label htmlFor="user">🧍🏻 Your expense</label>
      <input type="text" id="user" />
      <label htmlFor="friend">🧑🏻‍🤝‍👩🏼 Friend&apos;s expense</label>
      <input type="text" id="friend" disabled />
      <label htmlFor="payer">🧑🏻‍🤝‍👩🏼 Who is paying the bill?</label>
      <select id="payer">
        <option value="user">You</option>
        <option value="friend">Friend</option>
      </select>

      <Button>Add</Button>
    </form>
  );
}

export default FormSplitBill;
