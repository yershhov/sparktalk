import styled from "styled-components";
import { Input } from "../../../../../styles/form/Input";
import { FlexCenter } from "../../../../../styles/layouts/flexLayouts";

const MessageInputStyled = styled(FlexCenter)`
  background: ${(props) => props.theme.colors.secondary};
  height: 4rem;
  width: 100%;
  position: sticky;
  bottom: 0;
  right: 0;
`;

export default function ChatMessageInput() {
  return (
    <MessageInputStyled>
      <Input placeholder="Message" />
    </MessageInputStyled>
  );
}
