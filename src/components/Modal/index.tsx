import { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleSwitchStatusPopup } from 'store/redux/features/popupState';
import { RootState } from 'store/redux';

import { IoClose } from 'react-icons/io5';
import { colors } from 'themes';

import { Button, ModalContainer, PopupButton } from './styles';


type Props = {
    children: JSX.Element | JSX.Element[] | ReactElement;
};

const Modal = ({ children }: Readonly<Props>) => {
    const isLoading = useSelector((state: RootState) => state.loaderCloSet.isLoading);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(handleSwitchStatusPopup());
    };

    return (
        <ModalContainer id='web-modal'>
            <Button $isLoad={isLoading}>
                <IoClose size={30} color={colors.gray} />
            </Button>
            {children}
            <PopupButton $isLoad={isLoading} onClick={handleSubmit}>
                gg
            </PopupButton>
        </ModalContainer>
    )
};

export default Modal;