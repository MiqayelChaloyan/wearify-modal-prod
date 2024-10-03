import React, { useEffect, useRef } from 'react';
import { RangeSliderHeader, RangeSliderInput, RangeSliderInputWrapper, SliderContainer, Title, Value } from './styles';


interface RangeSliderProps {
    min: number;
    max: number;
    initialValue: number;
    title: string;
    value: number;
    onChange: (value: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, title, value, onChange }) => {
    const sliderRef = useRef<HTMLInputElement>(null);

    const settings = {
        fill: '#0C0D34',
        background: '#d9d9d9',
    };

    useEffect(() => {
        if (sliderRef.current) {
            applyFill(sliderRef.current);
        }
    }, [value]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        onChange(newValue);
    };

    const applyFill = (slider: HTMLInputElement) => {
        const percentage = (100 * (Number(slider.value) - min)) / (max - min);
        const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
        slider.style.background = bg;
    };

    return (
        <SliderContainer>
            <RangeSliderHeader>
                <div>
                    <Title>{title} <span>*</span> (CM)</Title>
                </div>
                <div>
                    <Value>{value}</Value>
                </div>
            </RangeSliderHeader>
            <RangeSliderInputWrapper>
                <RangeSliderInput
                    ref={sliderRef}
                    type="range"
                    value={value}
                    min={min}
                    max={max}
                    onChange={handleInputChange}
                    style={{ background: settings.background }}
                />
            </RangeSliderInputWrapper>
        </SliderContainer>
    );
};

export default RangeSlider;

























// import React, { useState, useEffect, useRef } from 'react';
// import './styles.css';

// interface RangeSliderProps {
//     min: number;
//     max: number;
//     initialValue: number;
//     title: string;
// }

// const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, initialValue, title }) => {
//     const [value, setValue] = useState<number>(initialValue);
//     const sliderRef = useRef<HTMLInputElement>(null);

//     const settings = {
//         fill: '#0C0D34',
//         background: '#d9d9d9',
//     };

//     useEffect(() => {
//         if (sliderRef.current) {
//             applyFill(sliderRef.current);
//         }
//     }, [value]);

//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setValue(Number(event.target.value));
//     };

//     const applyFill = (slider: HTMLInputElement) => {
//         const percentage = (100 * (Number(slider.value) - min)) / (max - min);
//         const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
//         slider.style.background = bg;
//     };

//     return (
//         <div className='slider'>
//             <div className='range-slider__header'>
//                 <div>
//                     <h2 className='range-slider__title'>{title}</h2>
//                 </div>
//                 <div>
//                     <span className="range-slider__value">{value}</span>
//                 </div>
//             </div>
//             <div className="range-slider">
//                 <input
//                     ref={sliderRef}
//                     className="range-slider__range"
//                     type="range"
//                     value={value}
//                     min={min}
//                     max={max}
//                     onChange={handleInputChange}
//                     style={{ background: settings.background }}
//                 />
//             </div>
//         </div>
//     );
// };

// export default RangeSlider;

{/* <RangeSlider min={162} max={192} initialValue={162}  title='HEIGHT'/>
<RangeSlider min={50} max={96} initialValue={50} title='WEIGHT'/> */}
