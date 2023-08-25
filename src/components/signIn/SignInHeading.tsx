import styled from "styled-components";
import { FlexDirectionColumn } from "../../styles/layouts/flexLayouts";
import { Icons } from "../../styles/common/Icons";

const HeadingContainer = styled(FlexDirectionColumn)`
  align-items: center;
  width: 100%;
  position: absolute;
`;

const Heading = styled.h2`
  font-size: 26px;
  padding-top: 1rem;
  font-weight: 800;
  text-align: center;
`;

export default function SignInHeading() {
  return (
    <HeadingContainer>
      <Icons>⚛️🔥</Icons>
      <Heading>Welcome to Sparktalk!</Heading>
    </HeadingContainer>
  );
}
