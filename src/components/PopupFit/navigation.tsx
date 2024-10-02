import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ADD_CLOSET_URL, INITIALIZE_STATE } from 'store/redux/features/valuesState';
import { INITIALIZE_STATE_PROCESSING } from 'store/redux/features/stagesState';

import { useMultistepForm } from 'hooks/useMultistepForm';

import Step1 from './steps/Step1';
import Step2 from './steps/Step2';

import Popup from './index';
import { handleSwitchStatusPopupFit } from 'store/redux/features/popupFitState';
import { QUERY } from 'utils/constants/endpoints';
import { RootState } from 'store/redux';


const NavigationFit: React.FC = () => {
    const product = useSelector((state: RootState) => state.productsData.product);
    const { isFemale, skin, height, weight } = useSelector((state: RootState) => state.values);
    let gender = isFemale ? 1 : 0;

    const dispatch = useDispatch();

    const { currentStepIndex, step, back, next, goTo } =
        useMultistepForm([
            <Step1 />,
            <Step2 />,
        ]);

    const _handleNext = () => {
        if (currentStepIndex < 1) {
            return next();
        }

        if (currentStepIndex === 1) {
            const closet_url = product?.closet_url.split('?')[0];

            let url = `${closet_url}?&avatar_info=${gender}_3e35445aaa7d49a6acc00087ef6c22bd_${height}_${weight}_${skin?.ID}${QUERY}`;

            dispatch(ADD_CLOSET_URL(url));
            dispatch(handleSwitchStatusPopupFit());
        }
    }

    const _handleBack = () => {
        return back();
    }

    const _handleTryAgain = () => {
        dispatch(INITIALIZE_STATE());
        dispatch(INITIALIZE_STATE_PROCESSING());
        return goTo(0);
    }

    return (
        <Popup
            currentStepIndex={currentStepIndex}
            _handleBack={_handleBack}
            _handleNext={_handleNext}
            _handleTryAgain={_handleTryAgain}
        >
            {step}
        </Popup>
    )
};

export default NavigationFit;