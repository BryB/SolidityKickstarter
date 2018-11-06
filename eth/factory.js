import web3 from './web3';
import CampaignFactory from './build/campaignFactory.json';

const instance = new web3.eth.Contract (
  JSON.parse(CampaignFactory.interface),
  '0xab2c20c7a2B5f50443641B3007114793E9E34eeE'
);

export default instance;
