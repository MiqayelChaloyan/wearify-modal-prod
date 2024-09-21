import styled from 'styled-components';
import { media } from 'styles/globalStyles';

type ButtonProps = {
    $isLoad: boolean;
};

export const ModalContainer = styled.div`
    display: none;
    width: 636px;
    height: 500px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    ${media.xs`
        height: 500px;
        width: 636px;
        border-radius: 30px;
    `}
    ${media.sm`
        height: 500px;
        width: 636px;
    `}
    ${media.md`
        height: 500px;
        width: 636px;
    `}
    ${media.lg`
        height: 500px;
        width: 636px;
    `}
    ${media.xl`
        height: 500px;
        width: 636px;
    `}
    ${media["2xl"]`
        height: 500px;
        width: 636px;
    `}
`;

export const Button = styled.button<ButtonProps>`
    display: ${({ $isLoad }) => ($isLoad ? 'block' : 'none')};
    position: absolute;
    z-index: 1000;
    border: none;
    background: none;
    padding: 10px;
    cursor: pointer;
    width: 20px;
    height: 20px;
`;

export const PopupButton = styled.button<ButtonProps>`
    display: ${({ $isLoad }) => ($isLoad ? 'block' : 'none')};
    position: absolute;
    z-index: 1000;
    border: none;
    background: none;
    padding: 10px;
    cursor: pointer;
    width: 55px;
    height: 50px;
    right: 20px;
    bottom: 225px;
    background-color: red
`;