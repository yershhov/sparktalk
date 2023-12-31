import styled from "styled-components";
import { screens } from "../../../styles/screens";

export const ChatsbarContainer = styled.div<{ width: number }>`
  width: 100%;
  display: flex;
  background: ${(props) => props.theme.colors.secondary};
  position: relative;

  @media ${screens.md} {
    min-width: 250px;
    max-width: 70%;
    width: ${(props) => props.width + "px"};
    border-right: ${(props) => props.theme.colors.border} 1px solid;
  }
`;

export const ChatsbarContent = styled.div`
  flex: 1;
`;

export const ChatsbarResizer = styled.div`
  cursor: ew-resize;
  resize: horizontal;
  width: 10px;
  position: absolute;
  height: 100%;
  left: 100%;
  z-index: 9999;
`;
