import { useChainId } from "@thirdweb-dev/react";
import React, { useState, useEffect } from "react";

import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context";
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const chainId = useChainId();
  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    if (chainId !== undefined && chainId !== 5) {
      alert("Select Goerli Chain");
    }

    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <DisplayCampaigns
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  );
};

export default Home;
