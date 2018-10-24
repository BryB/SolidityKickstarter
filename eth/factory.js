import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract (
  JSON.parse(CampaignFactory.interface),
  '0x4cf639eD8130D4302215F9c33eEf96AaDF131eD8'
);

export default instance;
