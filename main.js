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


function renderInventory(NFTs){
  const parent = document.getElementById("app");  
  for(let i=0;i<NFTs.length;i++){
    const nft = NFTs[i];
    let htmlstring = `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${nft.metadata.image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nft.metadata.name}</h5>
      <p class="card-text">${nft.metadata.description}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  `

    let col=document.createElement("div");
    col.className = "col col-md-3"  
    col.innerHTML = htmlstring;
    parent.appendchild(col);

  }
}
async function initializeApp() {
  let currentUser = Moralis.User.current();
  if (!currentUser) {
    currentUser = await Moralis.Web3.authenticate();
   }
    const options = { 
      address: "0x2ccd43e32a508e4ec5d2eec7c5e8b7212a656790", 
      chain: "rinkeby" 
    };
      const  NFTs = await Moralis.Web3API.token.getAllTokenIds(options);
      console.log(NFTs);
    renderInventory(NFTs);
}

initializeApp();