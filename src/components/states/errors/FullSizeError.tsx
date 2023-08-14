import { Icons } from "../../../pages/SignIn/styled";
import {
  FlexDirectionColumn,
  FlexJustifyCenter,
  FullSizeFlexCenter,
} from "../../../styles/layouts/flexLayouts";
import styled from "styled-components";

const FullSizeErrorContainer = styled(FlexDirectionColumn)`
  width: 20rem;
`;

const FullSizeErrorMessageContainer = styled(FlexJustifyCenter)`
  text-align: center;
`;

export default function FullSizeError({ message }: { message?: string }) {
  return (
    <FullSizeFlexCenter>
      <FullSizeErrorContainer>
        <Icons>⚛️🔥</Icons>
        <FullSizeErrorMessageContainer>
          {message ?? "An error occured"}
        </FullSizeErrorMessageContainer>
      </FullSizeErrorContainer>
    </FullSizeFlexCenter>
  );
}
