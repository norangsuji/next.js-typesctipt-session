"use client";

// 수정금지

import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  min-height: 100vh;
`;

export default function Container({
	children,
}: {
	children: React.ReactNode;
}) {
	return <StyledContainer>{children}</StyledContainer>;
}