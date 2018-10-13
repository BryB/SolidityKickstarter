pragma solidity ^0.4.17;

contract campaign {
  struct Request {
    string description;
    uint value;
    address recipient;
    bool complete;
    uint approvalCount;
    mapping(address => bool) approvals;
  }

  address public manager;
  uint public minContribution;
  mapping(address => bool) public approvers;
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

    approvers[msg.sender] = true;

  }

  function createRequest(string desc, uint val, address recipient)
  public restricted
  {
    Request memory newRequest = Request
    ({
      description: desc,
      value: val,
      recipient: recipient,
      complete: false,
      approvalCount: 0
      });

      requests.push(newRequest);
  }

  function approveRequest(uint index) public {
      Request storage request = requests[index];

      require(approvers[msg.sender]);
      require(!request.approvals[msg.sender]);

      request.approvals[msg.sender] = true;
      request.approvalCount++;
  }
}
