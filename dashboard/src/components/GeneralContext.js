import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";
import AddFundsWindow from "./AddFundsWindow";
import WithdrawFundsWindow from "./WithdrawFundsWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
  openAddFundsWindow: () => {},
  closeAddFundsWindow: () => {},
  openWithdrawFundsWindow: () => {},
  closeWithdrawFundsWindow: () => {},
  refreshTrigger: 0,
  triggerRefresh: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [isAddFundsWindowOpen, setIsAddFundsWindowOpen] = useState(false);
  const [isWithdrawFundsWindowOpen, setIsWithdrawFundsWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenAddFundsWindow = () => {
    setIsAddFundsWindowOpen(true);
  };

  const handleCloseAddFundsWindow = () => {
    setIsAddFundsWindowOpen(false);
  };

  const handleOpenWithdrawFundsWindow = () => {
    setIsWithdrawFundsWindowOpen(true);
  };

  const handleCloseWithdrawFundsWindow = () => {
    setIsWithdrawFundsWindowOpen(false);
  };

  const triggerRefresh = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        openAddFundsWindow: handleOpenAddFundsWindow,
        closeAddFundsWindow: handleCloseAddFundsWindow,
        openWithdrawFundsWindow: handleOpenWithdrawFundsWindow,
        closeWithdrawFundsWindow: handleCloseWithdrawFundsWindow,
        refreshTrigger,
        triggerRefresh,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
      {isAddFundsWindowOpen && <AddFundsWindow />}
      {isWithdrawFundsWindowOpen && <WithdrawFundsWindow />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;