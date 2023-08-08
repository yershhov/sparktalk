import styled from "styled-components";
import { Flex, FlexDirectionColumn } from "../../styles/layouts/flexLayouts";
import Sidebar from "../../components/Home/Sidebar";

const HomePageContainer = styled(Flex)`
  display: flex;
  height: 100vh;
`;

const AppFrame = styled(FlexDirectionColumn)`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100%;
`;

export default function Home() {
  return (
    <HomePageContainer>
      <Sidebar />
      <AppFrame />
    </HomePageContainer>
  );
}
