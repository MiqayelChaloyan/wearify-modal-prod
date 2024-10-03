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

import { Button, Text, Loading, ModalContainer, PopupButton, PopupFitButton, HideAllButtons, Overlay, Container, BackButton, DepArContainer, ModalContainerDepAr } from './styles';
import { handleSwitchStatusPopupFit } from 'store/redux/features/popupFitState';
import { ADD_CLOSET_URL, INITIALIZE_LINK } from 'store/redux/features/valuesState';
import ToggleSwitch from 'components/ToggleSwitch';
import { ProdIds } from 'utils/helpers/products';
import IframeContainer from 'components/DeepAr';


type Props = {
    children: JSX.Element | JSX.Element[] | ReactElement;
};

const Modal = ({ children }: Readonly<Props>) => {
    const { isLoading } = useSelector((state: RootState) => state.loaderCloSet);
    const { isStageTwoProcessing } = useSelector((state: RootState) => state.stages);
    const { closetUrl } = useSelector((state: RootState) => state.values);
    const product = useSelector((state: RootState) => state.productsData.product);
   
    const storedProductShopifyId = localStorage.getItem('productShopifyId');
    const endpoint = ProdIds.filter(prod => prod.id === product?.id || prod.productId === storedProductShopifyId);

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

    const _handleBack = () => {
        dispatch(INITIALIZE_LINK(''));
    }

    console.log(endpoint[0])
    return (
        <>
            {endpoint[0]?.is_depar ? (
                <DepArContainer id='web-modal'>
                    <ModalContainerDepAr id='modal'>
                        {/* <ButtonDeepAr onClick={handleClose}>
                            <IoClose size={30} color={colors.gray} />
                        </ButtonDeepAr> */}
                        {children}
                    </ModalContainerDepAr>
                </DepArContainer>
            ) : (
                <Container id='web-modal'>
                    <Overlay>
                        <div />
                    </Overlay>
                    <ModalContainer id='modal'>
                        <Button $isLoad={isLoading} onClick={handleClose}>
                            <IoClose size={30} color={colors.gray} />
                        </Button>

                        {children}

                        {endpoint[0]?.is_flag && (
                            <>
                                <PopupFitButton disabled={!!isStageTwoProcessing} $isLoad={isLoading} onClick={_handleChangePopupFit}>
                                    <FitIcon fill={!!isStageTwoProcessing ? 'red' : 'rgb(235, 235, 237)'} />
                                </PopupFitButton>
                                <PopupButton disabled={!!isStageTwoProcessing} $isLoad={isLoading} onClick={_handleChangePopup}>
                                    <PeopleIcon fill={!!isStageTwoProcessing ? 'red' : 'rgb(235, 235, 237)'} />
                                </PopupButton>
                                <FITHide />
                                {closetUrl?.trim() && (
                                    <>
                                        <HideAllButtons>
                                            <BackButton onClick={_handleBack}>Back</BackButton>
                                            <div />
                                        </HideAllButtons>
                                    </>
                                )}
                                {isStageTwoProcessing && (
                                    <>
                                        <FITHide />
                                        <GroupHide />
                                    </>
                                )}
                                {/* <ToggleSwitch isLoad={isLoading} /> */}
                            </>
                        )}

                        <Loading $isactive={isStageTwoProcessing}>
                            <Text>{Texts.largeLoading}</Text>
                            <Loader duration={60} isActive={isStageTwoProcessing} />
                        </Loading>
                    </ModalContainer>
                </Container>
            )
            }
        </>
    )
};

export default Modal;