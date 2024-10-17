import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IframeWrapper from 'components/Iframe';
import Navigation from 'components/Popup/navigation';
import NavigationFit from 'components/PopupFit/navigation';

import { UPDATE_DATA, UPDATE_DEFAULT_IMAGE } from 'store/redux/features/valuesState';
import { setProduct } from 'store/redux/features/productsDataState';
import { RootState } from 'store/redux';

import { ProdIds } from 'utils/helpers/products';
import ModelViewer from 'components/ModelViewer';


import { DriverCap, Pregomesh_bows } from 'utils/tests/__models__/__index__';
import ModelViewerContainer from 'components/ModelViewerContainer';
import IframeContainer from 'components/DeepAr';



const Step1 = () => {
    const [url, setUrl] = useState<string | undefined>(undefined);

    const element = document.getElementById('web-modal');
    const productShopifyId = element?.getAttribute('product-id');
    // const storedProductShopifyId = localStorage.getItem('productShopifyId');
    const storedProductShopifyId = '8758648307947'

    const endpoint = ProdIds.filter(prod => prod.productId === storedProductShopifyId);
    const productsData = useSelector((state: RootState) => state.productsData.data);

    const foundProduct = productsData.find(product => product?.id == endpoint[0]?.id);
    const { closetUrl } = useSelector((state: RootState) => state.values);
    const dispatch = useDispatch();

    useEffect(() => {
        if (storedProductShopifyId && foundProduct) {
            dispatch(UPDATE_DATA({ isFemale: foundProduct?.gender }));
            dispatch(UPDATE_DEFAULT_IMAGE(foundProduct?.gender));
            dispatch(setProduct(foundProduct));

        }
    }, [storedProductShopifyId, foundProduct, dispatch]);

    useEffect(() => {
        if (!closetUrl?.trim()) {
            setUrl(foundProduct?.closet_url)
        } else {
            setUrl(closetUrl)
        }
    }, [foundProduct, closetUrl])

    return (
        <>
            {endpoint[0].is_flag ? (
                <>
                    <IframeWrapper src={url} />
                    <Navigation />
                    <NavigationFit />
                </>
            ) : endpoint[0].is_depar ? (
                <IframeContainer />
            ) : (
                <ModelViewerContainer />
            )}
        </>
    );
};

export default Step1;
