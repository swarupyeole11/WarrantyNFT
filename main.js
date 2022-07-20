// Moralis.initialize("7LVcpr1IeYLThaA8PSnVgdO78hlBU33gH3qan8s3");
// Moralis.serverURL = "https://msfamyuq5cz2.usemoralis.com:2053/server";

// async function initializeApp(){
//     let currentUser = Moralis.User.current();
//     if(!currentUser){
//         currentUser = await Moralis.Web3.authenticate();
//     }
//     const options = {
//       address: "0x2ccd43e32a508e4ec5d2eec7c5e8b7212a656790",
//       chain: "rinkeby",
//     };
//     let NFTs = await Moralis.Web3API.token.getAllTokenIds(options);
//     console.log(NFTs); 
// }

// initializeApp();        


const appId = ("7LVcpr1IeYLThaA8PSnVgdO78hlBU33gH3qan8s3");
const serverUrl = "https://msfamyuq5cz2.usemoralis.com:2053/server";
Moralis.start({ serverUrl , appId })

async function initializeApp() {
  let currentUser = Moralis.User.current();
  if (!currentUser) {
    currentUser = await Moralis.Web3.authenticate();
  }
    const options = { 
      address: "0x2ccd43e32a508e4ec5d2eec7c5e8b7212a656790", 
      chain: "rinkeby" 
    };
    const NFTs = await Moralis.Web3API.token.getAllTokenIds(options);
    console.log(NFTs);
}

initializeApp();