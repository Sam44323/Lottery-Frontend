import web3 from "./web3";

// exporting a local copy of the contract that's being deployed for using the methods
export default new web3.eth.Contract(
  process.env.REACT_APP_CONTRACT_INTERFACE as any,
  process.env.REACT_APP_DEPLOY_ADDRESS
);
