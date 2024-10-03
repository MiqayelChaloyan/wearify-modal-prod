import styled from 'styled-components';

export const IframeWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-bottom: 56.25%;
  left: 0;
  bottom: 4px;
  overflow: hidden;
  z-index: 200000;
  box-sizing: border-box;

  /* Responsive adjustments */
  @media (min-width: 1536px) {
    bottom: 4px;
  }

  @media (max-width: 1536px) and (min-width: 1200px) {
    bottom: 4px;
  }

  @media (max-width: 1200px) and (min-width: 1024px) {
    bottom: 4px;
    height: 420px;
  }

  @media (max-width: 1024px) and (min-width: 850px) {
    bottom: 4px;
    height: 400px;
  }

  @media (max-width: 850px) and (min-width: 750px) {
    bottom: 4px;
    height: 340px;
  }

  @media (max-width: 750px) and (min-width: 480px) {
    bottom: 4px;
    padding-bottom: 75%;
  }

  @media (max-width: 480px) {
    bottom: 140px;
    height: 330px;
    padding-bottom: 50%;
  }

  @media (max-width: 360px) {
    bottom: 4px;
    height: 330px;
    padding-bottom: 50%;
  }
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  display: none; /* Hidden initially */

  &.loaded {
    display: block; /* Display iframe once loaded */
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 101; /* Ensure button is above the iframe */
  color: white;

  /* Responsive adjustments */
  @media (min-width: 1536px) {
    right: 15px;
  }

  @media (max-width: 1536px) and (min-width: 1200px) {
    right: 12px;
  }

  @media (max-width: 1200px) and (min-width: 1024px) {
    right: 10px;
  }

  @media (max-width: 850px) {
    right: 8px;
  }

  @media (max-width: 750px) and (min-width: 480px) {
    right: 5px;
  }

  @media (max-width: 480px) {
    right: 5px;
  }
`;
