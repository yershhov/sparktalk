import { IoMenuOutline } from "react-icons/io5";
import { Input } from "../../../../../styles/form/Input";
import { FlexAlignCenter } from "../../../../../styles/layouts/flexLayouts";
import styled from "styled-components";

const ChatsbarHeaderStyled = styled(FlexAlignCenter)`
  padding: 0 0.8rem;
  height: 4rem;
`;

const BurgerMenuContainet = styled(FlexAlignCenter)`
  height: 100%;
`;

const BurgerMenuWrapper = styled(FlexAlignCenter)`
  border-radius: 50%;
  padding: 0.2rem;
  color: ${(props) => props.theme.colors.light};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.border};
  }
`;

export default function ChatsbarHeader() {
  return (
    <ChatsbarHeaderStyled style={{ gap: 15 }}>
      <BurgerMenuContainet>
        <BurgerMenuWrapper>
          <IoMenuOutline size={28} />
        </BurgerMenuWrapper>
      </BurgerMenuContainet>
      <Input placeholder="This is a mock search" />
    </ChatsbarHeaderStyled>
  );
}
