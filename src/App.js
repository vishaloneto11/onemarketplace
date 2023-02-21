import React, { useState } from "react";
import Header from "./Components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Listing from "./Components/Listing";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Nftdetail from "./Components/Nftdetail";
import walletConnectFcn from "./Components/HTS/walletConnect";

const App = () => {
  const [walletData, setWalletData] = useState();
  const [accountId, setAccountId] = useState();
  const [connectTextSt, setConnectTextSt] = useState(
    "🔌Welcome Please connect your Wallet First"
  );

  const [connectLinkSt, setConnectLinkSt] = useState("");
  const [createTextSt, setCreateTextSt] = useState("");

  async function connectWallet() {
    if (accountId !== undefined) {
      setConnectTextSt(`🔌 Account ${accountId} already connected ⚡ ✅`);
    } else {
      const wData = await walletConnectFcn();
      wData[0].pairingEvent.once((pairingData) => {
        pairingData.accountIds.forEach((id) => {
          setAccountId(id);
          console.log(`- Paired account id: ${id}`);
          setConnectTextSt(`🔌 Account ${id} connected✅`);
          setConnectLinkSt(`https://hashscan.io/#/testnet/account/${id}`);
        });
      });
      setWalletData(wData);
      console.log(wData);

      setCreateTextSt();
    }
  }

  return (
    <div className="manager">
      <Router>
        <Header connectTextSt={connectTextSt} connectWallet={connectWallet} />
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route
            path="/nftdetails/:id"
            element={
              <Nftdetail walletData={walletData} accountId={accountId} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
