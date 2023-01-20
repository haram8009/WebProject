import React from "react";
import { Wrap } from "./styles";

function Header() {
  return (
    <Wrap>
      <div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload. 하이세연 이것은 헤더
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </Wrap>
  );
}
export default Header;
