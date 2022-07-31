import { task } from "hardhat/config";

task("deploy-forged-token")
  .addParam(
    "tokenReceiver",
    "The address of the receiver of the pre-minted tokens"
  )
  .setAction(async (taskArgs, hre) => {
    const { tokenReceiver } = taskArgs;

    const ForgedTokenFactory = await hre.ethers.getContractFactory(
      "ForgedToken"
    );
    const forgedToken = await ForgedTokenFactory.deploy(tokenReceiver);

    console.log(`ForgedToken address: ${forgedToken.address}`);
  });
