import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <StyledP>TODO LIST</StyledP>
      <StyledP>TYPE SCRIPT</StyledP>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  background-color: lightcoral;
  padding: 20px;
  font-size: larger;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
`;

const StyledP = styled.p`
  margin: 0;
`;

export default Header;
