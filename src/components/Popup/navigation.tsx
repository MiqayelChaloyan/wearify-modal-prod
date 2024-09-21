import React from 'react';

import { useMultistepForm } from 'hooks/useMultistepForm';

import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';

import Popup from './index'


const Navigation: React.FC = () => {
    const { currentStepIndex, step, back, next } =
        useMultistepForm([
            <Step1 />,
            <Step2 />,
            <Step3 />
        ]);

    const _handleNext = () => {
        return next();
    }

    const _handleBack = () => {
        return back();
    }

    return (
        <Popup
            currentStepIndex={currentStepIndex}
            _handleBack={_handleBack}
            _handleNext={_handleNext}
        >
            {step}
        </Popup>
    )
};

export default Navigation;