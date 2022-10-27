import styled from "styled-components";
import Image from "next/image";

export default function Veggie() {
  return (
    <div>
      <Headline>Welcome to Veggie!</Headline>
      <Text>Look at this awesome pizza!</Text>
      <Background>
        <Image
          src="/Pizzatime.jpg"
          alt="A really nice pizza"
          width={2400}
          height={1596}
        />
      </Background>
      ;
    </div>
  );
}

const Headline = styled.h1`
  color: blue;
`;

const Text = styled.div`
  color: black;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  top: 0;
  left: 0;
  z-index: -10;
  @media (max-width: 600px) {
    display: none;
  }
`;
