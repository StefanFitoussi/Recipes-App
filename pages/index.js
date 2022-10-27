import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Headline>Yeah</Headline>
      <Text>Welcome to Yeah</Text>
    </div>
  );
}

const Headline = styled.h1`
  color: blue;
`;

const Text = styled.div`
  color: black;
`;
