import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleSwitchStatusPopup } from 'store/redux/features/popupState';
import { INITIALIZE_STATE } from 'store/redux/features/valuesState';
import { INITIALIZE_STATE_PROCESSING, setProcessingState } from 'store/redux/features/stagesState';
import { RootState } from 'store/redux';

import { useMultistepForm } from 'hooks/useMultistepForm';

import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';

import Popup from './index';


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
            if (currentStepIndex === 1) {
                dispatch(setProcessingState(true));
            }

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
        dispatch(INITIALIZE_STATE_PROCESSING());
        return goTo(0);
    }


    // const _handleResult = () => {
    //     if (isResultAvailable) {
    //         goTo(3);
    //         dispatch(handleSwitchStatusPopup());
    //     }
    // }

    // useEffect(() => _handleResult(), [isResultAvailable]);

    const childrenWithProps = React.Children.map(step, child =>
        React.cloneElement(child, { goTo})
    );


    return (
        <Popup
            currentStepIndex={currentStepIndex}
            _handleBack={_handleBack}
            _handleNext={_handleNext}
            _handleTryAgain={_handleTryAgain}
        >
            {childrenWithProps}
        </Popup>
    )
};

export default Navigation;