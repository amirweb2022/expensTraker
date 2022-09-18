import { useEffect } from "react";
import { useState } from "react";

const TransActionComponent = ({ transactions }) => {
  const [searchItem, setsearchItem] = useState("");
  const [filterTnx, setFilterTnx] = useState(transactions);
  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilterTnx(transactions);
      return;
    }
    const filtered = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilterTnx(filtered);
  };
  const changeHandler = (e) => {
    setsearchItem(e.target.value);
    filterTransactions(e.target.value);
  };
  useEffect(() => {
    filterTransactions(searchItem);
  }, [transactions]);
  return (
    <div>
      <input
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="search for tnx..."
        className="search"
      />
      {filterTnx.length === 0
        ? ""
        : filterTnx.map((transaction) => {
            return (
              <section
                key={transaction.id}
                className="transaction"
                style={{
                  borderRight: transaction.type === "expens" && "4px solid red",
                }}
              >
                <span>{transaction.desc}</span>
                <span>${transaction.amount}</span>
              </section>
            );
          })}
    </div>
  );
};

export default TransActionComponent;