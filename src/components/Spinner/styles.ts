import styled from 'styled-components';
//https://gist.github.com/knowbody/578b35164b69e867ed4913423f6bed30
export const StyledSpinner = styled.svg`
  animation: rotate 1s linear infinite;
  margin: 2.5rem;
  width: 3.125rem;
  height: 3.125rem;

  & .path {
    stroke: black;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
`;
