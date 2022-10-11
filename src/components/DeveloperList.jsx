import React, { useState } from "react";
import DeveloperDetails from "./DeveloperDetails";

const DeveloperList = ({ dispatch, developers }) => {
  return developers.length ? (
    <div
      style={{
        boxShadow: "8px 8px 8px 5px gray",
        padding: "10px",
        margin: "10px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      {developers.map((developer, idx) => (
        <DeveloperDetails
          developer={developer}
          dispatch={dispatch}
          key={idx}
          id={idx + 1}
        />
      ))}
    </div>
  ) : (
    <h3>No Developers Found...!</h3>
  );
};

export default DeveloperList;
