const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const {interface, bytecode} = require('../compile')

const provider = ganache.provider();
const web3 = new Web3(provider);

let accounts;
let inbox;
const INIT_MESSAGE = "LOLZ!";

beforeEach (async () => {
  // get a list of all accounts.
  accounts = await web3.eth.getAccounts();
  // use one of the listed accouts to deploy the contract.
  inbox = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: bytecode, arguments: ["LOLZ!"]})
  .send({from: accounts[0], gas: '1000000'});
  inbox.setProvider(provider);
});

describe('Inbox', () => {
  it ('deploys a contract', () => {
    assert.ok(inbox.options.address);
  });
  it ('can change the message', async() => {
    await inbox.methods.setMessage("Bye").send({from: accounts[0]});
    const message = await inbox.methods.getMessage().call();
    assert.equal(message, 'Bye');
  })
});
