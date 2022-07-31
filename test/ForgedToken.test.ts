import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { utils } from "ethers";
import { ethers } from "hardhat";
import { ForgedToken } from "../typechain-types";

describe("ForgedToken", () => {
  let initialTokenReceiver: SignerWithAddress;
  let forgedToken: ForgedToken;

  before(async () => {
    initialTokenReceiver = (await ethers.getSigners())[1];

    const ForgedTokenFactory = await ethers.getContractFactory("ForgedToken");
    forgedToken = await ForgedTokenFactory.deploy(initialTokenReceiver.address);
  });

  it("mints 1M tokens to the initialTokenReceiver", async () => {
    expect(await forgedToken.balanceOf(initialTokenReceiver.address)).to.eq(
      utils.parseEther("1000000")
    );
  });

  it("has 18 decimals", async () => {
    expect(await forgedToken.decimals()).to.eq(18);
  });

  it("has a supply of 1M tokens", async () => {
    expect(await forgedToken.totalSupply()).to.eq(utils.parseEther("1000000"));
  });
});
