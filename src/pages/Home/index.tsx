import styled from "styled-components";
import { Flex } from "../../styles/layouts/flexLayouts";
import Chatsbar from "../../components/Home/Chatsbar";
import Chat from "../../components/Home/Chat";

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
