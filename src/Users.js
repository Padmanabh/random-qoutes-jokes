import React, { useContext } from "react";
import {GlobalContext} from "./GlobalContext";

const Users = props => {
  const { state, updateData } = useContext(GlobalContext);
  return (
    <div>
      {state.map(data => {
        return (
          <div key={data.id}>
            <h1>{data.name}</h1>
            <h4>{data.type}</h4>
          </div>
        );
      })}
      <button onClick={() => updateData()}>UpdateData</button>
    </div>
  );
};

export default Users;