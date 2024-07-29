import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 0 20px;
`;

export default function Center({ children }: { children: ReactNode }) {
  return <StyledDiv>{children}</StyledDiv>;
}
