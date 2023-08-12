import styled from "styled-components";

const ChatContainer = styled.div`
  flex: 1;
  color: ${(props) => props.theme.colors.border};
  display: grid;
  place-items: center;
  height: 100vh;
  max-height: 100%;
  min-width: 20rem;
`;

export default function Chat() {
  return <ChatContainer>This is a mock chat container</ChatContainer>;
}
