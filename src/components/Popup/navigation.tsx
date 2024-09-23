import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/redux';

import { useMultistepForm } from 'hooks/useMultistepForm';

import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';

import Popup from './index';
import { handleSwitchStatusPopup } from 'store/redux/features/popupState';
import { INITIALIZE_STATE } from 'store/redux/features/valuesState';


const Navigation: React.FC = () => {
    const { isResultAvailable } = useSelector((state: RootState) => state.stages);
    const dispatch = useDispatch();

    const { currentStepIndex, step, back, next, goTo } =
        useMultistepForm([
            <Step1 />,
            <Step2 />,
            <Step3 />,
            <Step4 />
        ]);

    const _handleNext = () => {
        if (currentStepIndex < 2) {
            return next();
        }

        if (currentStepIndex === 2) {
            return goTo(0);
        }
    }

    const _handleBack = () => {
        return back();
    }

    const _handleTryAgain = () => {
        dispatch(INITIALIZE_STATE());
        return goTo(0);
    }

    useEffect(() => {
        if (isResultAvailable) {
            goTo(3);
            dispatch(handleSwitchStatusPopup());
        }
    }, [isResultAvailable])

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

export default Navigation;