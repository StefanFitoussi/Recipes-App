import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <p>This is the footer-component</p>;
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  border-top: 1px solid #0c2c4d;
  color: #0c2c4d99;
  background-color: lightblue;
  padding: 0 1rem;
  height: 4rem;
`;
