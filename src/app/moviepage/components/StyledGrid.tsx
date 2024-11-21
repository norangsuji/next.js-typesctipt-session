import styled from "styled-components";

const StyledGrid = styled.div<{ $columns: string; $gap: string }>`
  display: grid;
  grid-template-columns: ${({ $columns }) => $columns};
  gap: ${({ $gap }) => $gap};
  justify-content: center;
`;

export default StyledGrid;
