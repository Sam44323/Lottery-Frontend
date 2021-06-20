import web3 from "./web3";

// exporting a local copy of the contract that's being deployed for using the methods
export default new web3.eth.Contract(
  [
    {
      constant: true,
      inputs: [],
      name: "manager",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "pickWinner",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "enter",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getAllPlayers",
      outputs: [{ name: "", type: "address[]" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ name: "", type: "uint256" }],
      name: "players",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
  ],
  process.env.REACT_APP_DEPLOY_ADDRESS
);
