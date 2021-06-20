import React from "react";

const EnterForm: React.FC<{ changeValue: (data: string) => void }> = ({
  changeValue,
}) => {
  return (
    <form>
      <h1>Want to try your luck?</h1>
      <div>
        <label>Amount of ether to enter</label>
        <input onChange={(e) => changeValue(e.target.value)} />
      </div>
    </form>
  );
};

export default EnterForm;
