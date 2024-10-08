import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: row;
`;

const bounce = keyframes`
  0% {
    transform: translateY(0px)
  }
  40% {
    transform: translateY(-40px);
  }
  80%,
  100% {
    transform: translateY(0px);
  }
`;

export const LoadingLetter = styled.span`
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #0C0D34;
  animation-name: ${bounce};
  animation-duration: 2s;
  animation-iteration-count: infinite;

  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
  &:nth-child(5) {
    animation-delay: 0.4s;
  }
  &:nth-child(6) {
    animation-delay: 0.5s;
  }
  &:nth-child(7) {
    animation-delay: 0.6s;
  }
  &:nth-child(8) {
    animation-delay: 0.8s;
  }
  &:nth-child(9) {
    animation-delay: 1s;
  }
  &:nth-child(10) {
    animation-delay: 1.2s;
  }

  @media (max-width: 700px) {
    font-size: 50px;
  }

  @media (max-width: 340px) {
    font-size: 40px;
  }
`;
