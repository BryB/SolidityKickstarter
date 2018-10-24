import React, {Component} from 'react';
import factory from '../eth/factory';


class campaignIndex extends Component {
  async ComponentDidMount() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    console.log(campaigns);
  }

  render(){
    return <div>Campaigns index</div>
  }
}

export default campaignIndex;
