import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface Props {
  size?: string;
  backgroundColor?: string
  green?: boolean;
  // other props
}

const StyleButton: React.FC<Props> = styled.button`
  border: 0;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
  color: #fff;
  background-color: ${(props) => props.backgroundColor || "#fff"};

  ${(props) =>
    props.green &&
    css`
      background-color: transparent;
    `}

  ${(props) =>
    props.size === "l" &&
    css`
      background-color: transparent;
      color: #000;
      justify-content: center;
      border: 1px solid #000;
    `}
`;

export default function Button({children,backgroundColor,...rest}: {
  children: ReactNode; size?: string; backgroundColor?: string;green?:boolean
}) {
  return (
    <StyleButton {...rest}>
      {children}
    </StyleButton>
  );
}