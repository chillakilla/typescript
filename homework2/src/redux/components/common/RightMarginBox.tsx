import { ReactNode } from "react";
import styled from "styled-components";

interface RightMarginBoxProps {
  margin: number;
  children: ReactNode;
}

function RightMarginBox({ margin, children }: RightMarginBoxProps) {
  return <StyledDiv margin={margin}>{children}</StyledDiv>;
}

const StyledDiv = styled.div<RightMarginBoxProps>`
  margin-right: ${(props) => props.margin}px;
`;

export default RightMarginBox;
