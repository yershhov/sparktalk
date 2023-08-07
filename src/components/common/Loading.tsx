import styled, { keyframes } from "styled-components";

const ldsEllipsisAnimation1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const ldsEllipsisAnimation2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const ldsEllipsisAnimation3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const LdsEllipsisContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const LdsEllipsisItem = styled.div`
  position: absolute;
  top: 33px;
  aspect-ratio: 1;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primary};
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
`;

const LdsEllipsisItem1 = styled(LdsEllipsisItem)`
  left: 8px;
  animation: ${ldsEllipsisAnimation1} 0.6s infinite;
`;

const LdsEllipsisItem2 = styled(LdsEllipsisItem)`
  left: 8px;
  animation: ${ldsEllipsisAnimation2} 0.6s infinite;
`;

const LdsEllipsisItem3 = styled(LdsEllipsisItem)`
  left: 32px;
  animation: ${ldsEllipsisAnimation2} 0.6s infinite;
`;

const LdsEllipsisItem4 = styled(LdsEllipsisItem)`
  left: 56px;
  animation: ${ldsEllipsisAnimation3} 0.6s infinite;
`;

const Loading = () => (
  <LdsEllipsisContainer>
    <LdsEllipsisItem1 />
    <LdsEllipsisItem2 />
    <LdsEllipsisItem3 />
    <LdsEllipsisItem4 />
  </LdsEllipsisContainer>
);

export default Loading;
