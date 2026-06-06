import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const Funds = () => {
  const [funds, setFunds] = useState(null);
  const { openAddFundsWindow, openWithdrawFundsWindow, refreshTrigger } = useContext(GeneralContext);

  useEffect(() => {
    axios.get("http://localhost:3002/funds").then((res) => {
      setFunds(res.data);
    });
  }, [refreshTrigger]);

  if (!funds) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <button className="btn btn-green" onClick={openAddFundsWindow}>Add funds</button>
        <button className="btn btn-blue" onClick={openWithdrawFundsWindow}>Withdraw</button>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{funds.availableMargin?.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">{funds.usedMargin?.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{funds.availableCash?.toFixed(2)}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>{funds.openingBalance?.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>{funds.payin?.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>{funds.span?.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>{funds.deliveryMargin?.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>{funds.exposure?.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>{funds.optionsPremium?.toFixed(2)}</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>{funds.collateralLiquid?.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>{funds.collateralEquity?.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>{(funds.collateralLiquid + funds.collateralEquity)?.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;