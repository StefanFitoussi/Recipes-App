import styled from "styled-components";

export default function Veggie() {
  return (
    <div>
      <Headline>Welcome to Veggie!</Headline>
      <Text>Welcome to the veggie-page</Text>
    </div>
  );
}

const Headline = styled.h1`
  color: blue;
`;

const Text = styled.div`
  color: black;
`;
