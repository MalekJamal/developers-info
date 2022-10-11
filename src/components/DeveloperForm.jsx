import React, { useState } from "react";
import { ACTIONS_TYPE } from "./Developer";

const DeveloperForm = ({ dispatch, developers }) => {
  const [name, setName] = useState("");
  const [progLan, setProgLan] = useState("Java");
  const [framework, setFramework] = useState("React");
  const [favF, setFavF] = useState("");
  const [favD, setFavD] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ACTIONS_TYPE.ADD_DEVELOPER,
      payload: { name, progLan, framework, favF, favD },
    });
    if (!name) return;

    setName("");
    setProgLan("");
    setFramework("");
    setFavF("");
    setFavD("");
  };

  const style = {
    borderRadius: "10px",
    padding: "10px",
    outline: "none",
    border: "none",
    background: "#f0f0f0",
    textAlign: "start",
    margin: "5px",
  };
  return (
    <div
      style={{
        boxShadow: "5px 10px 5px 5px gray",
        margin: "30px",
        borderRadius: "10px",
        padding: "25px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <form onSubmit={handleSubmit} method="post">
        <label>Developer Name</label>
        <br />
        <input
          type="text"
          value={name}
          required
          style={style}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <h4>programming language</h4>

        <select
          style={style}
          onChange={(e) => {
            setProgLan(e.target.value);
          }}
          value={progLan}
        >
          <option>Java</option>
          <option>Javascript</option>
          <option>PHP</option>
          <option>C++</option>
          <option>C-Sharp</option>
          <option>Ruby</option>
          <option>Python</option>
          <option>Dart</option>
          <option>Kotlin</option>
        </select>
        <br />

        <h4>Technologies / Framework</h4>

        <select
          style={style}
          onChange={(e) => {
            setFramework(e.target.value);
          }}
          value={framework}
        >
          <option>React</option>
          <option>Angualr</option>
          <option>.NET</option>
          <option>PWA</option>
          <option>NodeJS</option>
          <option>GraphQL</option>
          <option>AWS</option>
          <option>Docker</option>
          <option>Git/Github</option>
        </select>
        <br />
        <label>Favorite Food</label>
        <br />
        <input
          style={style}
          type="text"
          value={favF}
          required
          onChange={(e) => setFavF(e.target.value)}
        />
        <br />
        <label>Favorite Drink</label>
        <br />
        <input
          style={style}
          type="text"
          value={favD}
          required
          onChange={(e) => setFavD(e.target.value)}
        />
        <br />
        <button
          type="submit"
          style={{ margin: "10px", background: "gray", color: "#fff" }}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default DeveloperForm;
