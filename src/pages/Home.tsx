import styled from "styled-components";
import { Flex } from "../styles/layouts/flexLayouts";
import Chat from "../components/home/chat";
import Chatsbar from "../components/home/chatsbar";

const HomePageContainer = styled(Flex)`
  display: flex;
  height: 100vh;
`;

export default function Home() {
  return (
    <HomePageContainer>
      <Chatsbar />
      <Chat />
    </HomePageContainer>
  );
}
