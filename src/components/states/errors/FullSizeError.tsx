import { Icons } from "../../../pages/SignIn/styled";
import {
  FlexDirectionColumn,
  FlexJustifyCenter,
  FullSizeFlexCenter,
} from "../../../styles/layouts/flexLayouts";

export default function FullSizeError() {
  return (
    <FullSizeFlexCenter>
      <FlexDirectionColumn>
        <Icons>⚛️🔥</Icons>
        <FlexJustifyCenter full>Error</FlexJustifyCenter>
      </FlexDirectionColumn>
    </FullSizeFlexCenter>
  );
}
