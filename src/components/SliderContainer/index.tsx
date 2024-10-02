import React, { useEffect } from 'react';

import RangeSlider from 'components/RangeSlider';

import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_DATA } from 'store/redux/features/valuesState';
import { RootState } from 'store/redux';


const SliderContainer: React.FC = () => {
    const { height, weight } = useSelector((state: RootState) => state.values);
    const dispatch = useDispatch();


    useEffect(() => {
        const newWeight = calculateWeight(height);
        dispatch(UPDATE_DATA({ weight: newWeight }));

    }, [height]);

    const calculateWeight = (height: number) => {
        return Math.round((height - 162) * 0.5 + 50);
    };

    const _handlechangeHeight = (value: number) => {
        dispatch(UPDATE_DATA({ height: value }));

    };

    const _handlechangeWeight = (value: number) => {
        dispatch(UPDATE_DATA({ weight: value }));
    };

    return (
        <div>
            <RangeSlider
                min={162}
                max={192}
                initialValue={height}
                title="HEIGHT"
                value={height}
                onChange={(value) => _handlechangeHeight(value)}
            />
            <RangeSlider
                min={50}
                max={96}
                initialValue={weight}
                title="WEIGHT"
                value={weight}
                onChange={(value) => _handlechangeWeight(value)}
            />
        </div>
    );
};

export default SliderContainer;
