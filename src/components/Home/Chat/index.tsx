import styled from "styled-components";
import { screens } from "../../../styles/screens";
import { useParams } from "react-router-dom";

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
  const params = useParams();
  return <ChatContainer>{params.chatId ?? "Mock"}</ChatContainer>;
}
