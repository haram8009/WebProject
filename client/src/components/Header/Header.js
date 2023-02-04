import React from "react";
import { Left, Right, Wrap } from "./styles";

function Header() {
  return (
    <Wrap>
      <div>
        <Left>
          <img
            src={process.env.PUBLIC_URL + "/images/common/zeppelin.gif"}
            alt="zeppelin gif from https://www.flaticon.com/kr/free-animated-icons"
            title="제플린 애니메이션 아이콘 제작자: Freepik - Flaticon"
          />
          <span>this is header</span>
        </Left>
        <Right></Right>
      </div>
    </Wrap>
  );
}
export default Header;
