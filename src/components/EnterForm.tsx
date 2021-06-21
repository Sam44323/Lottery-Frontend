import React from "react";
import { EnterFormInt } from "../utils/interfaces";

const EnterForm: React.FC<EnterFormInt> = ({
  changeValue,
  value,
  enterHandler,
}) => {
  return (
    <form>
      <h1>Want to try your luck?</h1>
      <div>
        <label>Amount of ether to enter</label>
        <input onChange={(e) => changeValue(e.target.value)} value={value} />
      </div>
      <button onClick={(e) => enterHandler(e)}>Enter</button>
    </form>
  );
};

export default EnterForm;
