import { useEffect } from "react";
import { useState } from "react";
import OverviewComponent from "./Overview";
import TransActionComponent from "./TransActionComponent";

const ExpensApp = () => {
  const [expens, setExpens] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransaction] = useState([]);
  const addTransAction = (formValues) => {
    setTransaction([...transactions, { ...formValues, id: Date.now() }]);
  };
  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) => {
      t.type === "expens"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpens(exp);
    setIncome(inc);
  }, [transactions]);
  return (
    <section className="container">
      <OverviewComponent
        income={income}
        expens={expens}
        addTransAction={addTransAction}
      />
      <TransActionComponent transactions={transactions} />
    </section>
  );
};

export default ExpensApp;
