const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/campaignFactory.json');

const mneumonic = 'strong round enhance lazy stage sick message buzz dirt neutral ripple unhappy';
const infuraRinkeby = 'https://rinkeby.infura.io/v3/b447136315464ae5aa79d1c4de788883';

const provider = new HDWalletProvider(
  mneumonic, infuraRinkeby
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({data: compiledFactory.bytecode})
  .send({gas:"1000000", from: accounts[0]});
console.log('Contract deployed to ', result.options.address);
};
deploy();
