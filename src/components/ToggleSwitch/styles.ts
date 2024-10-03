import styled from 'styled-components';

type LoadingProps = {
    $isLoad: boolean;
};

export const Container = styled.div<LoadingProps>`
  display: ${({ $isLoad }) => ($isLoad ? 'block' : 'none')};
  width: 8rem;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

export const SwitchesContainer = styled.div`
  width: 4rem;
  position: relative;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  line-height: 2rem;
  border-radius: 3rem;
`;

export const RadioInput = styled.input`
  visibility: hidden;
  position: absolute;
  top: 0;
`;

export const Label = styled.label`
  width: 50%;
  text-align: center;
  cursor: pointer;
  padding: 10px
`;

interface SwitchWrapperProps {
  active: 0 | 1;
}

export const SwitchWrapper = styled.div<SwitchWrapperProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  padding: 0.15rem;
  z-index: 3;
  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  transform: ${({ active }) => (active === 0 ? 'translateX(0%)' : 'translateX(100%)')};
`;

export const Switch = styled.div`
  border-radius: 3rem;
  background: white;
  height: 100%;
  position: relative;
`;

interface SwitchTextProps {
  visible: boolean;
}

export const SwitchText = styled.div<SwitchTextProps>`
  width: 100%;
  text-align: center;
  opacity: ${({ visible }) => (visible ? 1 : 0)}; /* Hidden when not visible */
  transition: opacity 0.2s cubic-bezier(0.77, 0, 0.175, 1) 0.125s;
  color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')}; /* Ensure it's not rendered */
`;
