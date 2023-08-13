import styled from "styled-components";
import { screens } from "../../../styles/screens";

const ChatContainer = styled.div`
  flex: 1;
  color: ${(props) => props.theme.colors.border};
  height: 100vh;
  max-height: 100%;
  display: none;

  @media ${screens.md} {
    min-width: 20rem;
    display: grid;
    place-items: center;
  }
`;

export default function Chat() {
  return <ChatContainer>This is a mock chat container</ChatContainer>;
}
