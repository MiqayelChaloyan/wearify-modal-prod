import styled from 'styled-components';

type ContainerProps = {
    $isActive: boolean;
};

export const Container = styled.div<ContainerProps>`
    display: ${({ $isActive }) => ($isActive ? 'block' : 'none')};
`;

export const Box = styled.div`
    border-radius: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-51%, -50%);
    bottom: 0;
    right: 0;
    background-color: var(--white);
    width: 379px;
    height: 378px;
    z-index: 60;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const Section = styled.div`
    width: 100%;
    height: 220px;
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--dark-gray);
    z-index: 50;
    opacity: 0.75;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
`;

export const ButtonVariant1 = styled.button`
    width: 80px;
    height: 23px;
    font-weight: var(--font-weight-semi-bold);
    font-size: 10px;
    line-height: 11.75px;
    color: var(--white);
    cursor: pointer;
    text-decoration: none;
    margin: 15px 4px;
    background-color: var(--light-black);
    border: 1px solid var(--light-black);
    text-transform: uppercase;
    &:hover {
        color: var(--dark-blue);
        background-color: var(--text-first-color);
    }
`;

export const ButtonVariant2 = styled.button`
    width: 80px;
    height: 23px;
    font-weight: var(--font-weight-semi-bold);
    font-size: 10px;
    line-height: 11.75px;
    color: var(--white);
    cursor: pointer;
    text-decoration: none;
    margin: 15px 4px;
    background-color: var(--light-gray);
    border: 1px solid var(--light-gray);
    text-transform: uppercase;
`;

export const HorizontalLine = styled.div`
    width: 310px;
    height: 0.5px;
    background-color: var(--gray);
    margin: 10px auto;
`;