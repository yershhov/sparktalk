import styled from "styled-components";

export const Flex = styled.div<{ full?: boolean }>`
  display: flex;
  ${(props) => props.full && { width: "100%" }}
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
  width: 100%;
`;

export const FlexDirectionColumn = styled(FlexJustifyCenter)`
  flex-direction: column;
`;
