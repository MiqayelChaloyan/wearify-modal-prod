import React, { useEffect } from 'react';

import RangeSlider from 'components/RangeSlider';

import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_DATA } from 'store/redux/features/valuesState';
import { RootState } from 'store/redux';
import { HEIGHT, WEIGHT } from 'utils/helpers/sizes';


const SliderContainer: React.FC = () => {
    const { height, weight } = useSelector((state: RootState) => state.values);
    const dispatch = useDispatch();


    useEffect(() => {
        const newWeight = calculateWeight(height);
        dispatch(UPDATE_DATA({ weight: newWeight }));

    }, [height]);

    const calculateWeight = (height: number) => {
        return Math.round((height - HEIGHT.min) * 0.5 + WEIGHT.min);
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
                min={HEIGHT.min}
                max={HEIGHT.max}
                initialValue={height}
                title="HEIGHT"
                value={height}
                onChange={(value) => _handlechangeHeight(value)}
            />
            <RangeSlider
                min={WEIGHT.min}
                max={WEIGHT.max}
                initialValue={weight}
                title="WEIGHT"
                value={weight}
                onChange={(value) => _handlechangeWeight(value)}
            />
        </div>
    );
};

export default SliderContainer;
