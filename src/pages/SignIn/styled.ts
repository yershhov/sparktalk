import styled from "styled-components";
import {
  FlexCenter,
  FlexDirectionColumn,
  FlexAlignCenter,
} from "../../styles/layouts/flexLayouts";

export const SignInForm = styled(FlexCenter)`
  /* background: ${(props) => props.theme.colors.secondary}; */
  border-radius: 8px;
  padding: 2rem;
  height: fit-content;
`;

export const HeadingContainer = styled(FlexDirectionColumn)`
  align-items: center;
  width: 100%;
  position: absolute;
`;

export const Icons = styled.h1`
  padding-top: 2rem;
  font-size: 42px;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: 26px;
  padding-top: 1rem;
  font-weight: 800;
  text-align: center;
`;

export const TextWithLeftIcon = styled(FlexAlignCenter)`
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
`;

export const SignInPageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
