import { useDispatch } from 'react-redux';

import IframeWrapper from 'components/Iframe';
import Navigation from 'components/Popup/navigation';

import { data } from 'utils/tests/__tests__';
import { UPDATE_DATA, UPDATE_DEFAULT_IMAGE } from 'store/redux/features/valuesState';
import { PersonAttribute } from 'types';
import { useEffect } from 'react';


const Step1 = () => {
    const element = document.getElementById('web-modal');
    // const productId = element?.getAttribute('product-id');
    const productId = '8752854466795'
    const foundProduct = data.find(product => product.id === productId);

    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(UPDATE_DATA({ isFemale: foundProduct?.isFemale }));
            dispatch(UPDATE_DEFAULT_IMAGE(foundProduct?.isFemale || false))
            
        }
    }, [element, foundProduct, dispatch]);

    return (
        <>
            <IframeWrapper src={foundProduct?.closeUrl} />
            <Navigation />
        </>
    );
};

export default Step1;
