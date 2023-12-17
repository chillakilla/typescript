import styled from "styled-components";

interface HeightBoxProps {
  height: number;
}

function HeightBox({ height }: HeightBoxProps) {
  return <StyledDiv height={height} />;
}

const StyledDiv = styled.div<HeightBoxProps>`
  height: ${(props) => props.height}px;
`;

export default HeightBox;
