import React from "react";
import {
  ConnectWallet,
  MediaRenderer,
  Web3Button,
  useAddress,
  useContract,
  useContractMetadata,
} from "@thirdweb-dev/react";
import { NFT_CONTRACT_ADDRESS } from "../consts/addresses";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
  const address = useAddress();
  const { contract } = useContract(NFT_CONTRACT_ADDRESS);
  const { data: contractMetadata } = useContractMetadata(contract);

  const handleImageClick = () => {
    window.open("https://swap.crodex.app/#/swap?outputCurrency=0x3E68eA1588E32e51D98dBda6Ea05128513ECC713", "_blank", "width=700,height=600");
  };

  return (
    <div className={styles.container} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <a href="#" onClick={handleImageClick}>
        <div style={{ display: "grid", placeItems: "center", width: "100%", height: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "115px" }}>
            <img
              src="/images/Thirdweb-Icon-Circle-Black-08 1.gif" // Replace with your image URL
              alt="Image Description"
              style={{ width: "40%", height: "40%" }}  // Adjust the width and height here
            />
            <div style={{ textAlign: "center", color: "white", fontSize: "20px" }}>
              Click to Buy
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Home;
