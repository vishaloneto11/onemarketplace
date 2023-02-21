import React from "react";
import { Link } from "react-router-dom";
// import walletConnectFcn from "./HTS/walletConnect";
import "./Header.css";
const Header = ({ connectTextSt, connectWallet }) => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand text-light" to="/">
          ONETO11 MARKETPLACE
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="wallet">
          <li class="nav-item text-danger">
            {connectTextSt}
            {/* {connectLinkSt} */}
          </li>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item text-light">
              {/* {connectTextSt} */}
              {/* {connectLinkSt} */}
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active text-light"
                aria-current="page"
                to="/"
              >
                Marketplace
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-light" to="/">
                Sold
              </Link>
            </li>

            <li class="nav-item">
              <button
                type="button"
                class="btn btn-light text-dark"
                onClick={connectWallet}
              >
                Connectwallet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
