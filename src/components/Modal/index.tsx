import { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleSwitchStatusPopup } from 'store/redux/features/popupState';
import { finalizeProcessing } from 'store/redux/features/stagesState';
import { RootState } from 'store/redux';

import { IoClose } from 'react-icons/io5';

import Loader from 'components/Loader';

import PeopleIcon from 'assets/icons/people';

import { Texts } from 'utils/constants';

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

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(finalizeProcessing(true));
        }, 120000); // 120 seconds (2 minutes)

        return () => clearTimeout(timer);
    }, []);

    return (
        <ModalContainer id='web-modal'>
            <Button $isLoad={isLoading}>
                <IoClose size={30} color={colors.gray} />
            </Button>
            {children}
            <PopupButton disabled={!!isStageTwoProcessing} $isLoad={isLoading} onClick={handleSubmit}>
                <PeopleIcon fill={isStageTwoProcessing ? 'black' : 'rgb(235, 235, 237)' }/>
            </PopupButton>

            <Loading $isactive={isStageTwoProcessing}>
                <Text>{Texts.largeLoading}</Text>
                <Loader duration={120} isActive={isStageTwoProcessing} />
            </Loading>
        </ModalContainer>
    )
};

export default Modal;