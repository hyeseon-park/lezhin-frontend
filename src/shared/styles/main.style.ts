import styled from "styled-components";
import * as C from "../common/color";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Wrap = styled(Div)`
  background-color: ${C.LEZHINWHITE};
`;

export const Box = styled(Div)<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${C.LEZHINRED};
`;

export const FilterBox = styled(Box)`
  margin: 10px 10px 0 0;
`;

export const Img = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;
