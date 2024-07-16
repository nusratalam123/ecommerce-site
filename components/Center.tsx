import styled from "styled-components";
import React, { ReactNode } from "react";

const styledDiv = styled.div`
  maxwidth: 800px;
  margin: 0 ;
`;

export default function Center({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
