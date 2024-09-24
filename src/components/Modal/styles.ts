import styled from 'styled-components';
import { media } from 'styles/globalStyles';

type ButtonProps = {
    $isLoad: boolean;
};

type LoadingProps = {
    $isactive: boolean;
};

export const ModalContainer = styled.div`
    display: none;
    width: 636px;
    height: 500px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
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
    z-index: 100;
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
    bottom: 225px;
    background-color: transparent;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
    ${media["2xl"]`
        bottom: 225px;
    `}
    ${media.xs`
        bottom: 225px;
    `}
    ${media.xl`
        bottom: 225px;
    `}
    ${media.lg`
        bottom: 125px;
    `}
    ${media.md`
        bottom: 125px;
    `}
    ${media.sm`
        bottom: 125px;
        right: 15px;
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
`
export const Text = styled.p`
    font-size: 12px;
    font-weight: var(--font-weight-medium);
    line-height: 14.1px;
    color: var(--dark-onyx);
    text-align: left;
    margin-bottom: 15px;
`;