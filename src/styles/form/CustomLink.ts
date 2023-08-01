import styled from "styled-components";
import { Div } from "../common/Div";

export const CustomLink = styled(Div)`
  font-weight: 500;
  text-decoration: underline;
  transition: all 0.15s ease;
  color: ${(props) => props.theme.colors.light};
  font-size: 13px;

  &:hover {
    opacity: 0.9;
  }
`;
