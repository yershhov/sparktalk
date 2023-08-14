import { Icons } from "../../../pages/SignIn/styled";
import {
  FlexDirectionColumn,
  FlexJustifyCenter,
  FullSizeFlexCenter,
} from "../../../styles/layouts/flexLayouts";

export default function FullSizeError({ message }: { message?: string }) {
  return (
    <FullSizeFlexCenter>
      <FlexDirectionColumn>
        <Icons>⚛️🔥</Icons>
        <FlexJustifyCenter full>
          {message ?? "An error occured"}
        </FlexJustifyCenter>
      </FlexDirectionColumn>
    </FullSizeFlexCenter>
  );
}
