import { useEffect } from 'react';

import Modal from 'components/Modal';

import { useMultistepForm } from 'hooks/useMultistepForm';

import SplashScreen from 'pages/SplashScreen';
import Step1 from 'pages/Step1';


const Route = () => {
    const { step, next } =
        useMultistepForm([
            <SplashScreen />,
            <Step1 />,
        ]);

    useEffect(() => {
        let isMounted = true;

        const intervalId = setTimeout(() => {
            if (isMounted) {
                next();
            }
        }, 5000);

        return () => {
            isMounted = false;
            clearTimeout(intervalId);
        };
    }, []);


    return (
        <Modal>
            {step}
        </Modal>
    )
};

export default Route;