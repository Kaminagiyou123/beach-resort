import styled from "styled-components";
import { setFlex, setBackground } from "../../styles";
const Hero = styled.header`
  min-height: 100vh;
  /* vw */
  ${(props) => setBackground({ img: props.img, color: "rgba(0,0,0,0)" })}
  ${setFlex()}
`;

export default Hero;
