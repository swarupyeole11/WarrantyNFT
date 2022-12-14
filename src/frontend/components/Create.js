import { useState } from 'react'
import { ethers } from "ethers"
import { Row, Form, Button } from 'react-bootstrap'
import {Buffer } from 'buffer';


const ipfsClient = require('ipfs-http-client');
const projectId = '2DeVHgO8Gm2nFJxZ6M2767xbBfV';
const projectSecret = 'dfb4977b845c71034e4efb1280de0b77';
const auth =
'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = ipfsClient.create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
  authorization: auth,
  },
  });


const Create = ({ marketplace, nft }) => {
 ///
  const [warranty,setWarranty] = useState(null)
  const [modelnum, setModelNum] = useState(null)
///
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const uploadToIPFS = async (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    if (typeof file !== 'undefined') {
      try {
        const result = await client.add(file)
        console.log(result)
        setImage(`https://nftwarranty.infura-ipfs.io/ipfs/${result.path}`)
      } catch (error){
        console.log("ipfs image upload error: ", error)
      }
    }
  }
  //this function adds the product meta data to IPFS
  const createNFT = async () => {
    if (!image || !price || !name || !description) return
    try{
      const result = await client.add(JSON.stringify({image, price, name, description,warranty,modelnum})) /**chaneg here */
      mintThenList(result)
    } catch(error) {
      console.log("ipfs uri upload error: ", error)
    }
  }
  
  //this functions first mints the nft for the product 
  const mintThenList = async (result) => {
    const uri = `https://nftwarranty.infura-ipfs.io/ipfs/${result.path}`
    // mint nft 
    await(await nft.mint(uri)).wait()
    // get tokenId of new nft 
    const id = await nft.tokenCount()
    // approve marketplace to spend nft
    await(await nft.setApprovalForAll(marketplace.address, true)).wait()
    // add nft to marketplace
    const listingPrice = ethers.utils.parseEther(price.toString())
    const warrantyP = ethers.utils.parseEther(warranty.toString())
    const modelnumP = ethers.utils.parseEther(modelnum.toString())
    
    await(await marketplace.makeItem(nft.address, id, listingPrice,/*chage here */warrantyP,modelnumP)).wait()
  }
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
          <div className="content mx-auto">
            <Row className="g-4">
              <Form.Control
                type="file"
                required
                name="file"
                onChange={uploadToIPFS}
              />
              <Form.Control onChange={(e) => setName(e.target.value)} size="lg" required type="text" placeholder="Name" />
              <Form.Control onChange={(e) => setDescription(e.target.value)} size="lg" required as="textarea" placeholder="Description" />
              <Form.Control onChange={(e) => setPrice(e.target.value)} size="lg" required type="number" placeholder="Price in ETH" />
              <Form.Control onChange={(e) => setWarranty(e.target.value)} size="lg" required type="number" placeholder="Warranty Period (years)" />
              <Form.Control onChange={(e) => setModelNum(e.target.value)} size="lg" required type="number" placeholder="Model Number" />
              <div className="d-grid px-0">
                <Button onClick={createNFT} variant="primary" size="lg">
                  List Product & NFT!
                </Button>
              </div>
            </Row>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Create
