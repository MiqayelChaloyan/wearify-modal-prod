import React, { ReactElement, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleSwitchStatusPopup } from 'store/redux/features/popupState';
import { finalizeProcessing } from 'store/redux/features/stagesState';
import { RootState } from 'store/redux';

import { IoClose } from 'react-icons/io5';

import Loader from 'components/Loader';
import FITHide from 'components/FITHide';
import GroupHide from 'components/GroupHide';

import PeopleIcon from 'assets/icons/people';

import { Product } from 'types';

import { Texts } from 'utils/constants';
import { data } from 'utils/tests/__tests__';

import { colors } from 'themes';

import { Button, Text, Loading, ModalContainer, PopupButton } from './styles';



type Props = {
    children: JSX.Element | JSX.Element[] | ReactElement;
};

const Modal = ({ children }: Readonly<Props>) => {
    const { isLoading } = useSelector((state: RootState) => state.loaderCloSet);
    const { isStageTwoProcessing } = useSelector((state: RootState) => state.stages);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(handleSwitchStatusPopup());
    };

    const handleClose = () => {
        const modal = document.getElementById('web-modal');
        if (modal) {
            modal.style.display = "none";
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(finalizeProcessing(true));
        }, 50000); // 50 seconds 

        return () => clearTimeout(timer);
    }, []);
    

    return (
        <ModalContainer id='web-modal'>
            <Button $isLoad={isLoading} onClick={handleClose}>
                <IoClose size={30} color={colors.gray} />
            </Button>
            {children}
            <PopupButton disabled={!!isStageTwoProcessing} $isLoad={isLoading} onClick={handleSubmit}>
                <PeopleIcon fill={'rgb(235, 235, 237)'} />
            </PopupButton>
            {isStageTwoProcessing && (
                <>
                    <FITHide />
                    <GroupHide />
                </>
            )}
            <Loading $isactive={isStageTwoProcessing}>
                <Text>{Texts.largeLoading}</Text>
                <Loader duration={50} isActive={isStageTwoProcessing} />
            </Loading>
        </ModalContainer>
    )
};

export default Modal;