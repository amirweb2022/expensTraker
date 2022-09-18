import { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverviewComponent = ({ income, expens, addTransAction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <section>
      <div className="topSection">
        <p style={{fontWeight : "bold"}}>Balance : {income - expens}$</p>
        <button
          onClick={() => setIsShow(!isShow)}
          className={`btn ${isShow ? "cansel" : ""}`}
        >
          {isShow ? "Cansel" : "Add"}
        </button>
      </div>
      {isShow ? <TransActionForm addTransAction={addTransAction} setIsShow={setIsShow}/> : ""}
      <div className="resultSection">
        <div className="expensBox">
          Expenes <span style={{ color: "red" }}>{expens}$</span>
        </div>
        <div className="expensBox">
          Income <span>{income}$</span>
        </div>
      </div>
    </section>
  );
};

export default OverviewComponent;