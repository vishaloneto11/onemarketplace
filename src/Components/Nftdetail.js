import React from "react";
import { useParams } from "react-router-dom";
import Data from "../listing.json";
import "./Nftdetails.css";
const Nftdetail = () => {
  const { id } = useParams();

  const nftItem = Data.find((item) => item.serialno === id);

  /**
   * 
   *  name: string;
    description: string;
    symobol: string;
    image: string;
    tokenid: string;
    serialno: string;
    properties: {
        gender: string;
        face: string;
        hair: string;
        spacesuit: string;
        accessories: string;
        background: string;
    };
} | undefined
   */

  return (
    <div>
      <h1 className="text-center text-light mb-4">NFT DETAILS</h1>

      <div className="container text-light">
        <div className="row">
          <div className="col-md-6 rounded">
            <img className="w-100" src={nftItem.image} alt={nftItem.name} />
          </div>
          <div className="col-md-6 self">
            <h2>{nftItem.name}</h2>
            <p>{nftItem.description}</p>
            <p className="text-danger">Token Number : {nftItem.tokenid}</p>
            <p>Serial Number : {nftItem.serialno}</p>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <button className="btn btn-outline-primary btn-lg btn-block mx-2">
              Associate Token
            </button>
            <button className="btn btn-primary btn-lg btn-block mx-2">
              Buy this NFT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nftdetail;
