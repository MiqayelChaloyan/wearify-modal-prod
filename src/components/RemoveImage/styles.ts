import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-51%, -50%);
    bottom: 0;
    right: 0;
    background-color: var(--white);
    width: 310px;
    height: 180px;
    z-index: 60;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 250px;
    margin: 10px auto;
`;

export const Box = styled.div`
    display: flex;
`;

export const HorizontalLine = styled.div`
    width: 250px;
    height: 0.5px;
    background-color: var(--gray);
    margin: 10px auto;
`;

export const Button = styled.button`
    border: none;
    background: none;
    padding: 10px;
    cursor: pointer;
    width: 20px;
    height: 20px;
`;

export const H2 = styled.h2`
    font-size: 15px;
    font-weight: var(--font-weight-semi-bold);
    line-height: 17.63px;
    color: var(--dark-onyx);
    text-align: left;
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

export const Text = styled.p`
    color: var(--dark-onyx);
    line-height: 20px;
    font-size: 14px;
    font-weight: var(--font-weight-semi-bold);
    width: 250px;
    margin: 10px auto;
    text-align: left;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 17px
`;

export const CancelButton = styled.button`
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
    &:hover {
        color: var(--dark-blue);
        background-color: var(--text-first-color);
    }
`;

export const DeleteButton = styled.button`
    width: 80px;
    height: 23px;
    font-weight: var(--font-weight-semi-bold);
    font-size: 10px;
    line-height: 11.75px;
    color: var(--white);
    cursor: pointer;
    text-decoration: none;
    margin: 15px 4px;
    background-color: var(--red);
    border: 1px solid var(--red);
`;