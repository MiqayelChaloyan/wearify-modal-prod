// import { useEffect } from 'react';
// import SplashScreen from 'pages/SplashScreen';

import Modal from 'components/Modal';

import { useMultistepForm } from 'hooks/useMultistepForm';

import Step1 from 'pages/Step1';


const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Route = () => {
    const { step, next } =
        useMultistepForm([
            // <SplashScreen />,
            <Step1 />,
        ]);

    // useEffect(() => {
    //     let isMounted = true;

    //     const intervalId = setTimeout(() => {
    //         if (isMounted) {
    //             next();
    //         }
    //     }, 4000);

    //     return () => {
    //         isMounted = false;
    //         clearTimeout(intervalId);
    //     };
    // }, []);
    
    delay(4000);

    return (
        <Modal>
            {step}
        </Modal>
    )
};

export default Route;