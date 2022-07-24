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
  console.log('aditya');
  console.log(NFTs);
  const parent = document.getElementById("app"); 
  console.log(NFTs.result.length); 
  // {"image":"https://msfamyuq5cz2.usemoralis.com/tokyo.png","description":"the artwork of a solidity developer","name":"Sanskar's artwork"}

  for(let i=0;i<NFTs.result.length;i++){
    const myObj = JSON.parse(NFTs.result[i].metadata);
    const div = document.createElement("div");
    div.className = "card";
    const img = document.createElement("img");
    img.src = myObj.image;
    img.className = "card-img-top";
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = myObj.name;
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerHTML = myObj.description;
    const button = document.createElement("button");
    button.className = "btn btn-primary";
    button.innerHTML = "Buy";
    button.onclick = function(){
      Moralis.Web3API.token.buyToken(NFTs.result[i].id);
    }
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(button);
    div.appendChild(img);
    div.appendChild(cardBody);
    parent.appendChild(div);
  }
}
  // console.log('data', myObj.image);
//   for(let i=0;i<NFTs.result.length;i++){
//     console.log(NFTs);  
//     const nft = NFTs;
//     const myObj = JSON.parse(nft.result[i].metadata);
//     let htmlstring = `
//     <div class="card" style="width: 18rem;">
//     <img class="card-img-top" src="${myObj.image}" alt="Card image cap">
//     <div class="card-body">
//       <h5 class="card-title">${myObj.name}</h5>
//       <p class="card-text">${myObj.description}</p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>
//   `

//     let col=document.createElement("div");
//     col.className = "col col-md-3"  
//     col.innerHTML = htmlstring;
//     parent[0].appendchild(col);
//     console.log("a");

//   }
// }

async function initializeApp() {
  let currentUser = Moralis.User.current();
  if (!currentUser) {
    currentUser = await Moralis.Web3.authenticate();
   }
    const options = {
      address: "0x37156b89ca3b12c1949c0c60caed76b59b969b04",
      chain: "rinkeby",
    };
      let  NFTs = await Moralis.Web3API.token.getAllTokenIds(options);
      console.log(NFTs);
    
    renderInventory(NFTs);
}

initializeApp();