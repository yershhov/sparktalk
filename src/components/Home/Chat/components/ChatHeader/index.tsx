import { FlexCenter } from "../../../../../styles/layouts/flexLayouts";
import styled from "styled-components";

const ChatHeaderStyled = styled(FlexCenter)`
  background: ${(props) => props.theme.colors.secondary};
  height: 4rem;
  width: 100%;
  position: sticky;
  top: 0;
  right: 0;
`;

export default function ChatHeader() {
  return <ChatHeaderStyled>ChatHeader</ChatHeaderStyled>;
}
