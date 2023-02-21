import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../listing.json";
import "./Nftdetails.css";
// import assotoken from "./HTS/AssociateToken";
// import tokenTransferfcn from "./HTS/buyNft";
// import Header from "./Header";

// const [connectTextSt, setConnectTextSt] = useState("🔌 Connect here...");
// const [tokenSupply, setTokenSupply] = useState();
// const [mintTextSt, setMintTextSt] = useState("");
// const [mintLinkSt, setMintLinkSt] = useState("");

const Nftdetail = () => {
  async function asstoken(tokenid) {
    console.log("Tokenid", tokenid);
    // const [supply, txIdRaw] = await assotoken();
    // walletData,
    // accountId,
    // tokenId
    // setTokenSupply(supply);
    // setMintTextSt(`Supply of token ${tokenId} is ${supply}! ✅`);
    // const txId = prettify(txIdRaw);
    // setMintLinkSt(`https://hashscan.io/#/testnet/transaction/${txId}`);
  }

  async function tokenTransfer(tokenid, serialno) {
    const Tid = process.env.REACT_APP_OPERATOR_ID;
    const Tkey = process.env.REACT_APP_OPERATOR_PVKEY;
    console.log(tokenid);
    console.log(serialno);
    console.log(Tid);
    console.log(Tkey);
    // const [] = await tokenTransferfcn(walletData, accountId, Tid, Tkey);
    // setConnectTextSt(`🔌 NFt transfer ⚡ ✅`);
  }
  const { id } = useParams();
  const nftItem = Data.find((item) => item.serialno === id);
  return (
    <div>
      <h1 className="text-center text-light mb-4">NFT DETAILS</h1>

      <div className="container text-light">
        <div className="row">
          <div className="col-md-6 ">
            <img className="w-100" src={nftItem.image} alt={nftItem.name} />
          </div>
          <div className="col-md-6 self">
            <h2>{nftItem.name}</h2>
            <div className="symobol">
              <h5>{nftItem.symobol}</h5>
            </div>
            <div className="des">
              <h6>{nftItem.description}</h6>
            </div>
            <div className="tokenid">
              <p className="text-success">Token Number : {nftItem.tokenid}</p>
            </div>
            <div className="serialno">
              <p>Serial Number : {nftItem.serialno}</p>
            </div>
            {/* wait */}
            <div>
              <table class="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Gender</th>
                    <th scope="col">Face</th>
                    <th scope="col">Hair</th>
                    <th scope="col">Spacesuit</th>
                    <th scope="col">accessories</th>
                    <th scope="col">background</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{nftItem.properties.gender}</th>
                    <td>{nftItem.properties.face}</td>
                    <td>{nftItem.properties.hair}</td>
                    <td>{nftItem.properties.spacesuit}</td>
                    <td>{nftItem.properties.accessories}</td>
                    <td>{nftItem.properties.background}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mybtn">
              <button
                className="btn btn-outline-primary btn-lg btn-block mx-2"
                onClick={() => asstoken(nftItem.tokenid)}
              >
                Associate Token
              </button>
              <button
                className="btn btn-primary btn-lg btn-block mx-2"
                onClick={() => tokenTransfer(nftItem.tokenid, nftItem.serialno)}
              >
                Buy this NFT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nftdetail;
