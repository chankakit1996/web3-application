import { ethers } from "hardhat";

const main = async () => {
  const Transactions = await ethers.getContractFactory('Transactions');
  const transactions = await Transactions.deploy();

  await transactions.waitForDeployment();

  console.log(`Transactions deployed to: ${await transactions.getAddress()}`);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1)
  }
}

runMain()
