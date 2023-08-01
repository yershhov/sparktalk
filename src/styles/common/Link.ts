import styled from "styled-components";
import { Div } from "./Div";

export const Link = styled(Div)`
  transition: all 0.15s ease;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;
