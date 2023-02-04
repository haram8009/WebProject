import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Wrap = styled.div`
  height: 52px;
  width: 100%;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #ebebeb;
  box-sizing: border-box;
  padding: 0 20px;
  z-index: 11;
  background-color: #ffffff;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 100%;
  }
`;

export const Left = styled(Flex)`
  gap: 10px;
  > img {
    width: 50px;
    cursor: pointer;
  }
  > span {
    cursor: pointer;
  }
`;

export const Right = styled(Flex)`
  gap: 20px;
`;
