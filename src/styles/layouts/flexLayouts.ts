import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const FlexAlignCenter = styled(Flex)`
  align-items: center;
`;

export const FlexJustifyCenter = styled(Flex)`
  justify-content: center;
`;

export const FlexCenter = styled(FlexAlignCenter)`
  justify-content: center;
`;

export const FlexSpaceBetween = styled(FlexAlignCenter)`
  justify-content: space-between;
`;

export const FullSizeFlexCenter = styled(FlexCenter)`
  height: 100%;
  width: 1005;
`;

export const FlexDirectionColumn = styled(FlexJustifyCenter)`
  flex-direction: column;
`;
