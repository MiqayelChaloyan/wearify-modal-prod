import React from 'react';

import { useDispatch } from 'react-redux';
import { handleSwitchStatusPopup } from 'store/redux/features/popupState';
import { INITIALIZE_STATE } from 'store/redux/features/valuesState';
import { INITIALIZE_STATE_PROCESSING } from 'store/redux/features/stagesState';

import { IoClose } from 'react-icons/io5';

import { colors } from 'themes';

import { Container, Box, Button, HorizontalLine, H2, Block } from './styles';


type Props = {
    title: string;
    _handleTryAgain: () => void;
};

const Header = ({ title, _handleTryAgain }: Readonly<Props>) => {
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(handleSwitchStatusPopup());
        dispatch(INITIALIZE_STATE());
        dispatch(INITIALIZE_STATE_PROCESSING());
        _handleTryAgain();
    };

    return (
        <Container>
            <Block>
                <Button onClick={handleSubmit}>
                    <IoClose size={25} color={colors.gray} />
                </Button>
            </Block>
            <Box>
                <H2>{title}</H2>
            </Box>
            <HorizontalLine>
                <div />
            </HorizontalLine>
        </Container>
    )
};

export default Header;