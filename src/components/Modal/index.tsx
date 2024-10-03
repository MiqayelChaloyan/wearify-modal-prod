import { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleSwitchStatusPopup } from 'store/redux/features/popupState';

import { finalizeProcessing, setStageTwoProcessing } from 'store/redux/features/stagesState';
import { RootState } from 'store/redux';

import { IoClose } from 'react-icons/io5';

import Loader from 'components/Loader';
import FITHide from 'components/FITHide';
import GroupHide from 'components/GroupHide';

import PeopleIcon from 'assets/icons/people';
import FitIcon from 'assets/icons/fit';

import { Texts } from 'utils/constants';

import { colors } from 'themes';

import { Button, Text, Loading, ModalContainer, PopupButton, PopupFitButton, HideAllButtons, Overlay, Container } from './styles';
import { handleSwitchStatusPopupFit } from 'store/redux/features/popupFitState';
import Navigation from 'components/Popup/navigation';
import NavigationFit from 'components/PopupFit/navigation';


type Props = {
    children: JSX.Element | JSX.Element[] | ReactElement;
};

const Modal = ({ children }: Readonly<Props>) => {
    const { isLoading } = useSelector((state: RootState) => state.loaderCloSet);
    const { isStageTwoProcessing } = useSelector((state: RootState) => state.stages);
    const { closetUrl } = useSelector((state: RootState) => state.values);

    const dispatch = useDispatch();


    const _handleChangePopupFit = () => {
        dispatch(handleSwitchStatusPopupFit());
    };

    const _handleChangePopup = () => {
        dispatch(handleSwitchStatusPopup());
    };

    const handleClose = () => {
        const bg = document.getElementById('web-modal');
        const modal = document.getElementById('modal');
        localStorage.removeItem('productShopifyId');

        if (modal && bg) {
            bg.style.display = "none";
            modal.style.display = "none";

        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setStageTwoProcessing(false));
            dispatch(finalizeProcessing(true));
        }, 60000); // 60 seconds 

        return () => clearTimeout(timer);
    }, []);


    // let load = isLoading || closetUrl.trim().length > 0;

    return (

        <Container id='web-modal'>
            <Overlay>
                <div />
            </Overlay>

   
            <ModalContainer id='modal'>
                <Button $isLoad={isLoading} onClick={handleClose}>
                    <IoClose size={30} color={colors.gray} />
                </Button>
                {children}
                <PopupFitButton disabled={!!isStageTwoProcessing} $isLoad={isLoading} onClick={_handleChangePopupFit}>
                    <FitIcon fill={'rgb(235, 235, 237)'} />
                </PopupFitButton>
                <PopupButton disabled={!closetUrl && !!isStageTwoProcessing} $isLoad={isLoading} onClick={_handleChangePopup}>
                    <PeopleIcon fill={'rgb(235, 235, 237)'} />
                </PopupButton>
                <FITHide />
                {/* {closetUrl?.trim() && (
                <>
                    <HideAllButtons>
                        <div />
                    </HideAllButtons>
                </>
            )} */}
                {isStageTwoProcessing && (
                    <>
                        <FITHide />
                        <GroupHide />
                    </>
                )}

                <Loading $isactive={isStageTwoProcessing}>
                    <Text>{Texts.largeLoading}</Text>
                    <Loader duration={60} isActive={isStageTwoProcessing} />
                </Loading>
            </ModalContainer>
        </Container>
    )
};

export default Modal;