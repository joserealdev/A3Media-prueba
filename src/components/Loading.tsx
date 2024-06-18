import styled from "styled-components";
import CenterWrapper from "./CenterWrapper";

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: var(--primary);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => (
  <CenterWrapper>
    <Spinner />
  </CenterWrapper>
);

export default Loading;
