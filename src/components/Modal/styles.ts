import styled from 'styled-components';
import { media } from 'styles/globalStyles';

type ButtonProps = {
    $isLoad: boolean;
};

type LoadingProps = {
    $isactive: boolean;
};

export const Container = styled.div`
    display: none;
`;

export const ModalContainer = styled.div`
    display: none;
    width: 636px;
    height: 500px;
    position: fixed;
    z-index: 100000;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    background-color: #ededed;
    ${media["2xl"]`
        height: 500px;
        width: 636px;
    `}
    ${media.xs`
        height: 500px;
        width: 636px;
        border-radius: 30px;
    `}
    ${media.xl`
        height: 500px;
        width: 636px;
    `}
    ${media.lg`
        height: 400px;
        width: 555px;
    `}
    ${media.md`
        height: 400px;
        width: 555px;
    `}
    ${media.sm`
        height: 400px;
        width: 400px;
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
    z-index: 10;
    border: none;
    background: none;
    padding: 10px;
    cursor: pointer;
    width: 55px;
    height: 50px;
    right: 20px;
    bottom: 195px;
    background-color: transparent;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
    ${media["2xl"]`
        bottom: 195px;
    `}
    ${media.xs`
        bottom: 195px;
    `}
    ${media.xl`
        bottom: 195px;
    `}
    ${media.lg`
        bottom: 95px;
    `}
    ${media.md`
        bottom: 95px;
    `}
    ${media.sm`
        bottom: 95px;
        right: 19px;
    `}
`;

export const PopupFitButton = styled.button<ButtonProps>`
    display: ${({ $isLoad }) => ($isLoad ? 'block' : 'none')};
    position: absolute;
    z-index: 10;
    border: none;
    background: none;
    padding: 10px;
    cursor: pointer;
    width: 55px;
    height: 50px;
    right: 20px;
    bottom: 252px;
    background-color: transparent;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
    ${media["2xl"]`
        bottom: 252px;
    `}
    ${media.xs`
        bottom: 252px;
    `}
    ${media.xl`
        bottom: 252px;
    `}
    ${media.lg`
        bottom: 252px;
    `}
    ${media.md`
        bottom: 153px;
        right: 19px;
    `}
    ${media.sm`
        bottom: 154px;
        right: 19px;
    `}
`;

export const Loading = styled.div<LoadingProps>`
    display: ${({ $isactive }) => ($isactive ? 'block' : 'none')};
    width: 100%;
    height: 78px;
    background-color: var(--pure-gray);
    position: absolute;
    bottom: 0;
    padding: 20px 40px;
    ${media["2xl"]`
        bottom: 0;
    `}
    ${media.xs`
        bottom: 0;
    `}
    ${media.xl`
        bottom: 0;
    `}
    ${media.lg`
        bottom: -100px;
    `}
    ${media.md`
        bottom: -100px;
    `}
    ${media.sm`
        bottom: -100px;
    `}
`;

export const Text = styled.p`
    font-size: 12px;
    font-weight: var(--font-weight-medium);
    line-height: 14.1px;
    color: var(--dark-onyx);
    text-align: left;
    margin-bottom: 15px;
`;

export const HideAllButtons = styled.div`
    width: 20%;
    height: 100%;
    background-color: var(--light-color);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100000;
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--dark-gray);
    z-index: 100000;
    opacity: 0.75;
`;

export const BackButton = styled.button`
    display: block;
    position: absolute;
    z-index: 10;
    border: none;
    background: none;
    padding: 10px;
    cursor: pointer;
    width: 100px;
    height: 50px;
    right: 20px;
    top: 20px;
    background-color: var(--dark-blue);
    color: var(--white);
    font-size: 16px;
    transition: transform 0.3s ease;
    &:hover {
        background-color: var(--blue);
    }
    ${media["2xl"]`
        top: 20px;
    `}
    ${media.xs`
        top: 20px;
    `}
    ${media.xl`
        top: 20px;
    `}
    ${media.lg`
        top: 20px;
    `}
    ${media.md`
        top: 19px;
        right: 19px;
    `}
    ${media.sm`
        top: 19px;
        right: 19px;
    `}
`;