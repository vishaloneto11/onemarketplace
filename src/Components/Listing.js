import React from "react";
import { Link } from "react-router-dom";
import Data from "../listing.json";

const Listing = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {Data.map((item) => {
            return (
              <div className="col-md-3 mb-3">
                <div class="card">
                  <img src={item.image} alt="item" />
                  <h3 className="p-2">{item.name}</h3>
                  <p className="px-2 pb-2">{item.description}</p>
                  <p className="px-2 pb-2">Price : 1 hbar</p>
                  <Link
                    to={`/nftdetails/${item.serialno}`}
                    className="btn btn-dark mx-2 mb-2"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Listing;
