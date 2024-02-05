
const hre = require("hardhat");

async function main() {
  const ecoBlock = await hre.ethers.getContractFactory("ecoBlock");
  const ecoblock = await ecoBlock.deploy();
  await ecoblock.deployed();

  console.log(
    `deployed to ${ecoblock.target}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
