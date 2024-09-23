import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'store/redux';

import Header from './Header';

import { Buttons, Titles } from 'utils/constants';

import { Box, ButtonVariant1, ButtonVariant2, Container, Footer, HorizontalLine, Overlay, Section } from './styles';


interface PopupProps {
    children: React.ReactNode;
    currentStepIndex: number;
    _handleBack: () => void;
    _handleNext: () => void;
    _handleTryAgain: () => void;
};

const Popup = ({
    children,
    currentStepIndex,
    _handleBack,
    _handleNext,
    _handleTryAgain
}: Readonly<PopupProps>) => {
    const isOpen = useSelector((state: RootState) => state.popup.isOpen);

    let stepTitle: string = Titles.uploadImage;

    switch (currentStepIndex) {
        case 0:
            stepTitle = Titles.uploadImage;
            break;
        case 1:
            stepTitle = Titles.skinAgeMetrics;
            break;
        case 2:
            stepTitle = Titles.model;
            break;
        case 3:
            stepTitle = Titles.generatedModel;
            break;
    }

    return (
        <Container $isActive={isOpen}>
            <Overlay />
            <Box>
                <Header title={stepTitle} />
                <Section>
                    {children}
                </Section>
                <HorizontalLine />
                <Footer>
                    {currentStepIndex === 0 ? (
                        <ButtonVariant1 onClick={_handleNext}>
                            {Buttons.next}
                        </ButtonVariant1>
                    ) : currentStepIndex === 3 ? (
                        <ButtonVariant1 onClick={_handleTryAgain}>
                            {Buttons.again}
                        </ButtonVariant1>
                    ) : (
                        <>
                            <ButtonVariant2 onClick={_handleBack}>
                                {Buttons.back}
                            </ButtonVariant2>
                            <ButtonVariant1 onClick={_handleNext}>
                                {currentStepIndex === 2 ? Buttons.cancel : Buttons.ok}
                            </ButtonVariant1>
                        </>
                    )}
                </Footer>

            </Box >
        </Container >
    )
};

export default Popup;