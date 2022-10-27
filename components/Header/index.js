import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <Link href="/" passHref legacyBehavior>
        <a>Startseite</a>
      </Link>
      <Link href="/pages/Dessert" passHref legacyBehavior>
        <a>Dessert</a>
      </Link>
      <Link href="/pages/Veggie" passHref legacyBehavior>
        <a>Veggie</a>
      </Link>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
  border-bottom: 1px solid var(--text-primary);
  background-color: var(--background-light);
`;
