import styled from "styled-components";

export default function Dessert() {
  return (
    <div>
      <Headline>Welcome to Dessert!</Headline>
      <Text>Welcome to the dessert-page</Text>
    </div>
  );
}

const Headline = styled.h1`
  color: blue;
`;

const Text = styled.div`
  color: black;
`;
