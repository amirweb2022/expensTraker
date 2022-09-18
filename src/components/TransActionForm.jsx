import { useState } from "react";

const TransActionForm = ({ addTransAction, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    type: "expens",
    desc: "",
    amount: "",
  });
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!formValues) {
      alert("Please fill in the entries");
      return;
    }
    addTransAction(formValues);
    setIsShow(false);
    setFormValues({ type: "expens", desc: "", amount: "" });
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        placeholder="description"
        onChange={changeHandler}
        value={formValues.desc}
      />
      <input
        type="tel"
        name="amount"
        placeholder="amount"
        onChange={changeHandler}
        value={formValues.amount}
      />
      <div className="radioBox">
        <input
          type="radio"
          value="expens"
          name="type"
          checked={formValues.type === "expens"}
          onChange={changeHandler}
          id="expens"
        />
        <label htmlFor="expens">Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          checked={formValues.type === "income"}
          onChange={changeHandler}
          id="income"
        />
        <label htmlFor="income">Income</label>
      </div>
      <button type="submit" className="btn primary">
        Add transaction
      </button>
    </form>
  );
};

export default TransActionForm;