import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const AddFundsWindow = () => {
  const [amount, setAmount] = useState(0);
  const { closeAddFundsWindow, triggerRefresh } = useContext(GeneralContext);

  const handleAddClick = () => {
    if (amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    axios.post("http://localhost:3002/addFunds", {
      amount: parseFloat(amount),
    }).then(() => {
      triggerRefresh();
      closeAddFundsWindow();
    }).catch((error) => {
      alert("Error adding funds: " + error.message);
    });
  };

  const handleCancelClick = () => {
    closeAddFundsWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Amount</legend>
            <input
              type="number"
              name="amount"
              id="amount"
              step="0.01"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <div>
          <button className="btn btn-blue" onClick={handleAddClick}>
            Add Funds
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFundsWindow;
