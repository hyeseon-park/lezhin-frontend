import styled from "styled-components";
import * as C from "../common/color";
import * as F from "../common/fontSize";

export const ListWrap = styled.div`
  margin-top: 113px;
  padding: 0 16px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

export const ItemLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Thumb = styled.div`
  overflow: hidden;
  width: 78px;
  height: 104px;
  border-radius: 4px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ItemCount = styled.div`
  padding: 8px 4px 0;
  width: 40px;
  // max-height: 72px;
  // flex-shrink: 0;
  text-align: center;
  white-space: nowrap;
`;

export const ItemRank = styled.strong`
  display: block;
  margin-bottom: 8px;
  font-size: ${F.MEDIUM};
`;

export const ItemStatus = styled.span<{ status: string }>`
  font-size: ${F.SMALL};
  color: ${(props) => (props.status === "up" ? C.LEZHINRED : C.LEZHINBLACK)};
  &::before {
    content: "";
    display: ${(props) => (props.status === "same" ? "none" : "inline-block")};
    vertical-align: middle;
    width: 6px;
    height: 4px;
    margin: 0 2px 2px 0;
    ${(props) =>
      props.status === "up"
        ? "border-bottom: 4px solid"
        : "border-top: 4px solid"};
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
  }
`;

export const ItemInfo = styled.div`
  position: relative;
  width: calc(100% - 118px);
  padding-top: 8px;
  white-space: nowrap;
`;

export const ItemTitle = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 48px;
  line-height: 24px;
  font-size: ${F.MEDIUM};
  font-weight: 400;
  white-space: normal;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemP = styled.p`
  font-size: ${F.SMALL};
  color: ${C.LEZHINGREY};
  margin-bottom: 2px;
`;

export const ItemArtists = styled(ItemP)``;

export const ItemArtist = styled.span`
  &:not(:last-child)::after {
    content: "/";
    padding: 0 3px;
  }
`;

export const ItemFreed = styled(ItemP)``;

export const ItemState = styled(ItemP)``;
