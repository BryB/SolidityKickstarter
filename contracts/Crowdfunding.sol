pragma solidity ^0.4.17;

contract campaign {
  struct Request {
    string description;
    uint value;
    address recipient;
    bool complete;
  }

  address public manager;
  uint public minContribution;
  address[] public approvers;
  Request[] public requests;

  modifier restricted() {
    require(msg.sender == manager);
    _;
  }

  function Campaign(uint minimum) public {
    manager = msg.sender;
    minContribution = minimum;
  }

  function contribute() public payable {
    require(msg.value > minContribution);

    approvers.push(msg.sender);
  }

  function createRequest(string desc, uint val, address recipient)
  public restricted
  {
    Request memory newRequest = Request
    ({
      description: desc,
      value: val,
      recipient: recipient,
      complete: false
      });

      requests.push(newRequest);
  }
}
