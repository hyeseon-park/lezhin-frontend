import styled from "styled-components";
import * as C from "../common/color";
import * as F from "../common/fontSize";

export const FilterHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 16px;
  background-color: ${C.LEZHINWHITE};
  border-bottom: 1px solid ${C.LEZHINLIGHTGREY};
  z-index: 1000;
`;

export const FilterHeaderTitle = styled.p`
  margin-top: 10px;
  font-size: ${F.LARGE};
  font-weight: 700;
`;

export const FilterRow = styled.div`
  display: flex;
  margin: 10px 0;
`;

export const FilterLabel = styled.label`
  padding: 2px;
  cursor: pointer;
  display: flex;
`;

export const FilterInput = styled.input`
  display: none;
`;

export const FilterBox = styled.div<{ checked: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 32px;
  background-color: ${(props) =>
    props.checked ? C.LEZHINRED : C.LEZHINLIGHTGREY};
  color: ${(props) => (props.checked ? C.LEZHINWHITE : C.LEZHINBLACK)};
  border-radius: 3px;
  transition: 0.2s;
  user-select: none;
`;

export const FilterSpan = styled.span`
  margin: 5px;
  font-size: ${F.SMALL};
`;
