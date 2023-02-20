import React from "react";
import { useParams } from "react-router-dom";
import Data from "../listing.json";

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
          <div className="col-md-6">
            <img className="w-100" src={nftItem.image} alt={nftItem.name} />
          </div>
          <div className="col-md-6">
            <h2>{nftItem.name}</h2>
            <p>{nftItem.description}</p>

            <button className="btn btn-success">Buy NFT</button>
            <button className="btn btn-danger">Associate Token</button>

            <p>{nftItem.tokenid}</p>
            <p>{nftItem.serialno}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nftdetail;
