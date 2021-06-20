import React from "react";
import "./App.scss";
import lottery from "./utils/lottery";

const App: React.FC = () => {
  const [manager, setManager] = React.useState<string>("");
  const getManagerData = React.useCallback(async () => {
    setManager(await lottery.methods.manager().call());
  }, []);
  React.useEffect(() => {
    getManagerData(); // getting the manager data from the contract on load
  }, [getManagerData]);
  return (
    <div>
      <h1>Lottery Contract</h1>
      <p>This contract is managed by {manager}</p>
    </div>
  );
};

export default App;
