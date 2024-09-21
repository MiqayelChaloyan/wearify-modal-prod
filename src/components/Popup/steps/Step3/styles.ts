import styled from 'styled-components';

export const Section = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.div`
    width: 76px;
    height: 76px;
    margin: 5px;
`;

export const Image1 = styled.img`
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 76px;
    height: 76px;
    background-color: var(--powder-blue);
    padding: 4px;
`;

export const Image2 = styled.img`
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 76px;
    height: 76px;
    background-color: var(--powder-blue);
`;

export const Text = styled.p`
    color: var(--onyx);
    line-height: 14.1px;
    font-size: 12px;
    font-weight: var(--font-weight-medium);
    margin: 20px auto;
    text-align: center;
`;

export const Loading = styled.div`
    width: 50%;
    height: 76px;
    margin: 5px auto;
`;