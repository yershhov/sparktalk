import { styled } from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding: 0.7rem 2rem;
  transition: background-color 0.3s ease; /* Add a smooth transition effect */
  width: 100%;

  &:hover {
    background: rgba(190, 108, 234, 0.7);
  }
`;
