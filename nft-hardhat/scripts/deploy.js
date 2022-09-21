// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat')

async function main() {
  const metadataURL =
    'https://gateway.pinata.cloud/ipfs/QmYipuUfFFJZDWSbHPKYLKUTvSvryipEhhir1KA6xw7R7a'

  const lw3PunksContract = await ethers.getContractFactory('LW3Punks')

  // deploy the contract
  const deployedLW3PunksContract = await lw3PunksContract.deploy(metadataURL)

  await deployedLW3PunksContract.deployed()

  // print the address of the deployed contract
  // 0x59CdEbe1eBd49482eb96659fd9f6C6f5Ee1F565B
  console.log('LW3Punks Contract Address:', deployedLW3PunksContract.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
