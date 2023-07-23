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

export const Box = styled(Div)`
  width: 100px;
  height: 100px;
  background-color: ${C.LEZHINRED};
`;
