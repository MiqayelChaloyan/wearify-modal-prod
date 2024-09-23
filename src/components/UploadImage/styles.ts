import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px auto;
`;

export const Icon = styled.div`
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: var(--transition);
    background-color: var(--powder-blue);
    margin: 5px;
    padding: 5px;
    &:hover {
        opacity: 0.65;
    }
`;

export const ImageButton = styled.button`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    cursor: pointer;
    transition: var(--transition);
    background-color: var(--powder-blue);
    margin: 5px;
    border: 3px solid var(--powder-blue);
    &:hover {
        border: 3px solid var(--blue);
    }
`;

export const Image = styled.img`
    object-fit: cover;
    width: 50px;
    height: 50px;
`;

export const Text = styled.p`
    color: var(--hard-dark-gray);
    line-height: 13.1px;
    font-size: 10.98px;
    font-weight: var(--font-weight-extra-bold);
`;

export const TextError = styled.p`
    color: var(--red);
    line-height: 10.1px;
    font-size: 10.98px;
    font-weight: var(--font-weight-extra-bold);
`;