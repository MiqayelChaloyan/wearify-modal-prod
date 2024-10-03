import styled from 'styled-components';

export const SliderContainer = styled.div`
    height: 85px;
    width: 100%;
`;

export const RangeSliderHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
`;

export const Title = styled.h2`
    font-size: 10.91px;
    font-weight: 500;
    color: #0C0D34;

    span {
        color: red;
        font-size: 17px;
    }
`;

export const Value = styled.span`
    display: inline-block;
    width: 60px;
    font-size: 10.91px;
    font-weight: 500;
    color: #0C0D34;
    line-height: 20px;
    text-align: right;
`;

export const RangeSliderInputWrapper = styled.div`
    margin: 20px auto;
    justify-content: center;
    display: flex;
    width: 100%;
`;

export const RangeSliderInput = styled.input`
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: #d7dcdf;
    outline: none;
    padding: 0;
    margin: 0;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #0C0D34;
        cursor: pointer;
        transition: background 0.15s ease-in-out;
    }

    &::-moz-range-thumb {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #0C0D34;
        cursor: pointer;
        transition: background 0.15s ease-in-out;
    }

    &:focus::-webkit-slider-thumb {
        box-shadow: 0 0 0 3px #fff, 0 0 0 6px #0C0D34;
    }
`;