"use client";

import styled from 'styled-components';

interface StyledFontProps {
	$font?: string;
	$color?: string;
	$fontweight?: string;
	$fontfamily?: string;
}

const StyledFont = styled.a<StyledFontProps>`
  font-size: ${(props) => props.$font || '0.8rem'};
  color: ${(props) => props.$color || '#F0F0F0'};
  font-weight: ${(props) => props.$fontweight || 'normal'};
  font-family: ${(props) => props.$fontfamily || "none"};
`;

export default StyledFont;