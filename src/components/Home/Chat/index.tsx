import styled from "styled-components";
import { breakpoints, screens } from "../../../styles/screens";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import { FlexDirectionColumn } from "../../../styles/layouts/flexLayouts";
import ChatHeader from "./components/ChatHeader";
import ChatMessageInput from "./components/ChatMessageInput";

const ChatContainer = styled(motion.div)`
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.border};
  height: 100%;
  width: 100%;
  flex: 1;
  position: relative;

  @media (max-width: ${breakpoints.md}) {
    position: fixed;
    top: 0;
    right: 0;
  }

  @media ${screens.md} {
    min-width: 20rem;
  }
`;

const MessagesContainer = styled.div`
  height: calc(100% - 8rem);
  overflow-y: auto;
  display: grid;
  place-items: center;
`;

export default function Chat() {
  const params = useParams();
  const navigate = useNavigate();
  const matches = useMediaQuery(screens.md);

  const mobileChatContainerProps = !matches
    ? {
        initial: { x: "100%" },
        animate: { x: params.chatId ? "0%" : "100%" },
        transition: { stiffness: 300, damping: 30 },
      }
    : {};

  return (
    <ChatContainer {...mobileChatContainerProps}>
      {params.chatId && <ChatHeader />}

      <MessagesContainer>
        <div onClick={() => navigate("/")}>
          {params.chatId ? (
            <FlexDirectionColumn style={{ gap: 10 }}>
              {[...Array(0)].map(() => (
                <div
                  style={{
                    height: "5rem",
                    width: "20rem",
                    background: "gray",
                  }}
                />
              ))}
            </FlexDirectionColumn>
          ) : (
            <div>Select a chat to start messaging</div>
          )}
        </div>
      </MessagesContainer>

      {params.chatId && <ChatMessageInput />}
    </ChatContainer>
  );
}
