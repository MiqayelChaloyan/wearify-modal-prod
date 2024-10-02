import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'store/redux';

import Header from './Header';

import { Buttons, Titles } from 'utils/constants';

import { Box, ButtonVariant1, ButtonVariant2, Container, Footer, HorizontalLine, Overlay, Section } from './styles';


interface PopupFitProps {
    children: React.ReactNode;
    currentStepIndex: number;
    _handleBack: () => void;
    _handleNext: () => void;
    _handleTryAgain: () => void;
};

const PopupFit = ({
    children,
    currentStepIndex,
    _handleBack,
    _handleNext,
    _handleTryAgain
}: Readonly<PopupFitProps>) => {
    const isOpen = useSelector((state: RootState) => state.popupFit.isOpen);

    let stepTitle: string = Titles.uploadImage;

    switch (currentStepIndex) {
        case 0:
            stepTitle = Titles.inputSize;
            break;
        case 1:
            stepTitle = Titles.skin;
            break;
    }

    return (
        <Container $isActive={isOpen}>
            <Overlay>
                <div />
            </Overlay>
            <Box>
                <Header title={stepTitle} _handleTryAgain={_handleTryAgain} />
                <Section>
                    {children}
                </Section>
                <HorizontalLine>
                    <div />
                </HorizontalLine>
                <Footer>
                    {currentStepIndex === 0 ? (
                        <ButtonVariant1 onClick={_handleNext}>
                            {Buttons.next}
                        </ButtonVariant1>
                    ) : currentStepIndex === 2 ? (
                        null
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

export default PopupFit;