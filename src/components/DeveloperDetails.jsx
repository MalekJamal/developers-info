import React from "react";
import { ACTIONS_TYPE } from "./Developer";
const DeveloperDetails = ({ dispatch, developer, id }) => {
  return (
    <div
      style={{
        boxShadow: "8px 8px 8px 5px gray",
        cursor: "grab",
        padding: "10px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        margin: "10px",
      }}
      onClick={() =>
        dispatch({
          type: ACTIONS_TYPE.REMOVE_DEVELOPER,
          id: developer.id,
        })
      }
    >
      <h2>Developer {id}</h2>
      <p>
        Name: <b>{developer.name}</b>
      </p>
      <p>Programming Language: {developer.progLan}</p>
      <p>Framework: {developer.framework}</p>
      <p>Favorite Drink: {developer.favF}</p>
      <p>Favorite Food: {developer.favD}</p>
    </div>
  );
};

export default DeveloperDetails;
