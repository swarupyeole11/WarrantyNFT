# Team - Reflex-Flipkart-Grid-4.0
## Topic - Blockchain-based eCommerce warranty system using NFTs

<p align="center">
  <img src="https://img.shields.io/badge/solidity-lightgrey" />
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  
</p>

The objective is to replace the physical warranty and have block chain based warranty using NFT which will ensure
authenticity and security.

- Converting ownership authenticity and product warranty cards into decaying NFTs.
- For instance, allow brands and retailers to introduce an NFT for each of their products, which allows customers to receive the physical product along with a digital version of it.
- Customers can then use the digital NFT to verify the authenticity of their product, prove their ownership of their product, and transfer ownership of them upon resale.
- The brand/retailer should also be able to tie the digital NFT to its warranty program, allowing owners to track repairs and replacements to the original item.
- Decay the NFT once the warranty is over.
- Using the Polygon blockchain to deploy our solution.

## Technology Stack & Tools

- Solidity (Writing Smart Contract)
- Javascript (React & Testing)
- [Ethers](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ipfs](https://ipfs.io/) (Metadata storage)
- [React routers](https://v5.reactrouter.com/) (Navigational components)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/), should work with any node version below 16.5.0
- Install [Hardhat](https://hardhat.org/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
```
$ cd nft_marketplace
$ npm install
```
### 3. Boot up local development blockchain
```
$ cd nft_marketplace
$ npx hardhat node
```

### 4. Connect development blockchain accounts to Metamask
- Copy private key of the addresses and import to Metamask
- Connect your metamask to hardhat blockchain.
- If you have not added hardhat to the list of networks on your metamask, open up a browser, click the fox icon, then click the top center dropdown button that lists all the available networks then click add networks. A form should pop up. For the "Network Name" field enter "Hardhat".Enter "New RPC URL" and chain ID and click save. 


### 5. Migrate Smart Contracts
`npx hardhat run src/backend/scripts/deploy.js --network localhost`

### 6. Run Tests
`$ npx hardhat test`

### 7. Launch Frontend
`$ npm run start`

## Stargazers
[![Stargazers repo roster for @adityagoel28/Team-Reflex-Flipkart-Grid-4.0](https://reporoster.com/stars/adityagoel28/Team-Reflex-Flipkart-Grid-4.0)](https://github.com/adityagoel28/Team-Reflex-Flipkart-Grid-4.0/stargazers)
