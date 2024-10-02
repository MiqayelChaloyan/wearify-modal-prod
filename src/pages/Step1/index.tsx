import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IframeWrapper from 'components/Iframe';
import Navigation from 'components/Popup/navigation';
import NavigationFit from 'components/PopupFit/navigation';

import { UPDATE_DATA, UPDATE_DEFAULT_IMAGE } from 'store/redux/features/valuesState';
import { setProduct } from 'store/redux/features/productsDataState';
import { RootState } from 'store/redux';

import { ProdIds } from 'utils/helpers/products';



const Step1 = () => {
    const [url, setUrl] = useState<string | undefined>(undefined);

    // const element = document.getElementById('web-modal');
    // const productId = element?.getAttribute('product-id');

    const productId = '58';
    const endpoint = ProdIds.filter(prod => prod.productId === productId)

    const productsData = useSelector((state: RootState) => state.productsData.data);
    const foundProduct = productsData.find(product => product?.id == endpoint[0]?.id);

    const { closetUrl } = useSelector((state: RootState) => state.values);
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId && foundProduct) {
            dispatch(UPDATE_DATA({ isFemale: foundProduct?.gender === 1 }));
            dispatch(UPDATE_DEFAULT_IMAGE(foundProduct?.gender === 1));
            dispatch(setProduct(foundProduct));

        }
    }, [productId, foundProduct, dispatch]);

    useEffect(() => {
        if(!closetUrl?.trim()) {
            setUrl(foundProduct?.closet_url)
        } else {
            setUrl(closetUrl)
        }
    }, [foundProduct, closetUrl])


    return (
        <>
            <IframeWrapper src={url} />
            <Navigation />
            <NavigationFit />
        </>
    );
};

export default Step1;
