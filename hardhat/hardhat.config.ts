import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// import config before anything else
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {},
};

export default config;
