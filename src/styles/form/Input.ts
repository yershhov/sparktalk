import { styled } from "styled-components";

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: 8px;
  caret-color: ${(props) => props.theme.colors.primary};
  outline: none;
  padding: 0.7rem 0.5rem;
`;
