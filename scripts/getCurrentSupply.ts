import { utils } from "ethers";
import { ethers } from "hardhat";

async function main() {
  const accounts = await ethers.getSigners();

  const ForgedTokenFactory = await ethers.getContractFactory(
    "ForgedToken",
    accounts[0]
  );
  const forgedToken = ForgedTokenFactory.attach(
    "0x15b39734A10A997d5e09B1a311c189c82f13b47d"
  );

  const supply = await forgedToken.totalSupply();
  console.log(`The total supply is ${utils.formatEther(supply)} FT`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
