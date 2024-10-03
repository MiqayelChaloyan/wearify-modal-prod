import styled from 'styled-components';

export const Link = styled.a`
    margin: 1px auto;
    width: 100px;
    height: 50px;
    text-align: center;
    background-color: var(--dark-blue);
    color: var(--white);
    font-size: 14px;
    font-weight: var(--font-weight-semi-bold);
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    z-index: 20000000;
    text-decoration: none;
`;


export const Button = styled.button`
    margin: 1px auto;
    width: 100px;
    height: 50px;
    text-align: center;
    background-color: var(--dark-blue);
    color: var(--white);
    font-size: 14px;
    font-weight: var(--font-weight-semi-bold);
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    z-index: 20000000;
    text-decoration: none;
    border: none;
`;


export const Box = styled.div`
    position: absolute;
    z-index: 10;
    // background-color: #ededed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`