import styled from 'styled-components';

type ButtonProps = {
    $isActive: boolean;
};

export const Button = styled.button<ButtonProps>`
    background-color: none;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: var(--transition);
    margin: 2px; 
    border: ${({ $isActive }) => ($isActive ? '3px solid var(--blue)' : '3px solid var(--white)')};
`;

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px auto;
`;

export const Subtitle = styled.h2`
    color: var(--dark-onyx);
    line-height: 14.1px;
    font-size: 12px;
    font-weight: var(--font-weight-medium);
    text-align: center;
    padding: 22px 0 0 0;
`;

export const Text = styled.p`
    color: var(--dark-onyx);
    line-height: 9.4px;
    font-size: 10px;
    font-weight: var(--font-weight-normal);
    padding: 4px 0 0 0;
`;