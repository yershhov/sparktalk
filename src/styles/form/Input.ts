import { styled } from "styled-components";

export const Input = styled.input<{ invalid?: boolean }>`
  background-color: ${(props) => props.theme.colors.secondary};
  border: 2px solid
    ${(props) =>
      props.invalid ? props.theme.colors.error : props.theme.colors.secondary};
  border-radius: 8px;
  caret-color: ${(props) => props.theme.colors.primary};
  outline: none;
  padding: 0.6rem 0.7rem;
  transition: border-color 0.3s ease; /* Add a smooth transition effect */
  width: 100%;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;
