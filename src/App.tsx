import React from "react";
import "./App.scss";
import lottery from "./utils/lottery";
import { AppInterface } from "./utils/interfaces";
import web3 from "./utils/web3";
import EnterForm from "./components/EnterForm";

const App: React.FC = () => {
  const [data, setData] = React.useState<AppInterface>({} as AppInterface);

  const getManagerData = React.useCallback(async () => {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getAllPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    setData((prev) => ({
      ...prev,
      manager,
      players,
      balance,
    }));
  }, []);

  React.useEffect(() => {
    getManagerData(); // getting the manager data from the contract on load
  }, [getManagerData]);

  const changeValue = React.useCallback((data: string) => {
    setData((prev) => ({
      ...prev,
      enterAmount: data,
    }));
  }, []);
  return (
    <div>
      <h1>Lottery Contract</h1>
      {data.manager ? (
        <p>
          This contract is managed by {data.manager}.<br /> There are currently{" "}
          {data.players.length} people entered, competing to win{" "}
          {web3.utils.fromWei(data.balance, "ether")} ether!
        </p>
      ) : (
        <p>Loading...</p>
      )}
      <hr />
      <EnterForm changeValue={changeValue} />
    </div>
  );
};

export default App;
