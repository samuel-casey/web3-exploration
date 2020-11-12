// frontend (requires webpack)
// import Web3 from 'web3';

// backend
const Web3 = require('web3');

///////////////////// CONNECTING TO BLOCKCHAIN WITH GANACHE /////////////////////
// what happens under the hood to create a provider when passing a url to new Web3()

// THIS IS ERRORING OUT FOR ME WITH ERROR OF: TypeError: this.host.substring is not a function at new HttpProvider
// const customProvider = {
// 	// web3 calls this method to delegate to the provider
// 	// tells sendAsync method which version of API to call with the payload argument
// 	sendAsync: (payload, cb) => {
// 		console.log('you called');
// 		console.log(payload);
// 		// assumes payload is undefined
// 		cb(undefined, 100);
// 	},
// };

// const web3 = new Web3.providers.HttpProvider(customProvider);

// shortcut to create a local instance of web3 from docs
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

const connect = async () => {
	// if you look on ganache-cli you see a call of eth_blockNumber after running this
	const blockNum = await web3.eth.getBlockNumber();
	console.log('connected');
	console.log('block number:', blockNum);
};

connect();
web3.eth.getAccounts(console.log);
