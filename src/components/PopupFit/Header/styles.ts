import styled from 'styled-components';

export const Container = styled.div`
    width: 310px;
    margin: 0 auto
`;

export const Box = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const Block = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
`;

export const HorizontalLine = styled.div`
    width: 310px;
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
    color: var(--black);
    text-align: left;
    text-transform: uppercase;
`;