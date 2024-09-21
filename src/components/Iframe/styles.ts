import styled from 'styled-components';

type IframeProps = {
    $loaded: boolean;
};

export const Box = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-51%, -50%);
`;

export const Iframe = styled.iframe<IframeProps>`
    display: ${({ $loaded }) => ($loaded ? 'block' : 'none')};
    border-radius: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
`;

export const HideBorder = styled.div`
    width: 100%;
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0;
    border: 2px solid rgb(236, 237, 234);
    background-color: transparent;
    pointer-events: none;
    z-index: 100000;
    display: block !important;
`;

export const ContainerClo3d = styled.div`
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
`;