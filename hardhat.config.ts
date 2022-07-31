import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

import "./tasks/deploy";

const config: HardhatUserConfig = {
  solidity: "0.8.9",

  networks: {
    goerli: {
      url: process.env.GOERLI_RPC!,
      accounts: [process.env.DEPLOYER_PK!],
    },
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY!,
  },
};

export default config;
