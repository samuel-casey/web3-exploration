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

// get all accounts on local blockchain
const listAccounts = async () => {
	await web3.eth.getAccounts(console.log);
	console.log('accounts^^^');
};

listAccounts();

// get gas price of blockchain
const getGasPrice = async () => {
	const gasPrice = await web3.eth.getGasPrice();
	console.log('gas price:', gasPrice);
};

getGasPrice();

// get balance of an address at a given block
const showBalance = async (address) => {
	// args = address, defaultBlock, callback
	const balance = await web3.eth.getBalance(
		'0x6508f1df46187e0e62b146ffb0a22d539dab336d'
	);
	console.log(`balance for address ${address}: ${balance}`);
};

// address passed below is first address in list that comes from listAccounts function
// returns
showBalance('0x6508f1DF46187e0e62b146FFB0a22D539Dab336d');
