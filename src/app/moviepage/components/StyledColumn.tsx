"use client";

import styled from 'styled-components';

interface StyledColumnProps {
	$width?: string;
	$height?: string;
	$gap?: string;
	$alignitems?: string;
	$justifycontent?: string;
	$margin?: string;
	$padding?: string;
}

const StyledColumn = styled.div<StyledColumnProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.$width || 'auto'};
  height: ${(props) => props.$height || 'auto'};
  gap: ${(props) => props.$gap || '30px'};
  align-items: ${(props) => props.$alignitems || 'center'};
  justify-content: ${(props) => props.$justifycontent || 'center'};
  margin: ${(props) => props.$margin || '0'};
  padding: ${(props) => props.$padding || '0'};
`;

export default StyledColumn;