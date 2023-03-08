const express = require('express');
const Web3 = require('web3');
const path = require('path');

const app = express();
const port = 3000;

//add the chain node there
const web3 = new Web3("xxxx")

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/secret', async (req, res) => {
    var address = await web3.eth.accounts.recover("Message to sign", req.query.signature);
    console.log(address);

    //checking the balance of the NFT in the accounts
    var balance = Number(await contract.methods.balanceOf(address.call()));
    console.log("Balance is ", balance)

    //the message sending to the user after their wallet has been checked
    if (balance > 0 ) {
        res.send("SECRET MESSAGE");
    } else {
        res.send("NOT AVAILABLE")
    }
})

app.listen(port, () => {
    console.log(`App can be reached on port ${port}`)
})

//add nft ADDRESS and ABI
const ADDRESS = "xxxx";
const ABI = xxxx;
const contract = new web3.eth.Contract(ABI, ADDRESS);
