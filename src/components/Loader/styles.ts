import styled, { keyframes, css } from 'styled-components';

type ProgressBarProps = {
    isActive: boolean;
};

export const Container = styled.div`
    margin: 1px auto;
    width: 100%;
    text-align: center;
`;

const progressAnimation = keyframes`
    0% {
        width: 1%;
        background-color: #5AD3E1;
    }
    100% {
        width: 100%;
        background-color: #5AD3E1;
    }
`;

export const ProgressBarContainer = styled.div`
    padding: 0;
    border-radius: 30px;
    background: rgba(0, 0, 0, 0.25);
    box-shadow: inset 0 1px 2px #ACACAC;
`;

export const ProgressBar = styled.div<ProgressBarProps>`
    height: 3px;
    border-radius: 30px;
    background-image: linear-gradient(to bottom, #ACACAC);
    transition: width 0.4s linear, background-color 0.4s linear;

    width: ${(props) => (props.isActive ? '100%' : '1%')};
    background-color: ${(props) => (props.isActive ? '#5AD3E1' : 'transparent')};

    ${(props) =>
        props.isActive &&
        css`
            animation: ${progressAnimation} 6s forwards;
        `}
`;
