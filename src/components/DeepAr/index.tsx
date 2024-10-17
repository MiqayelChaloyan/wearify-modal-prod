import React, { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { CloseButton, IframeWrapper, StyledIframe } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from 'store/redux';
import { ProdIds } from 'utils/helpers/products';
import IframeLoad from 'components/IframeLoad';

function IFrame({ src, onClose }: any) {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = () => {
        setLoaded(true);
    };

    return (
        <>
            {!loaded && (
                <div className="loader">
                    <IframeLoad />
                </div>
            )}
            <StyledIframe
                title="iframe"
                id="myIframe"
                src={src}
                className={loaded ? 'loaded' : ''}
                frameBorder="0"
                scrolling="no"
                allow="camera *;"
                loading="eager"
                onLoad={handleLoad}
            />
            <CloseButton onClick={onClose}>
                <IoClose size={30} />
            </CloseButton>
        </>
    );
}

// The IframeContainer component
const IframeContainer = () => {
    const [isVisible, setIsVisible] = useState(false);
    // const element = document.getElementById('web-modal');
    // const productShopifyId = element?.getAttribute('product-id');
    // const storedProductShopifyId = localStorage.getItem('productShopifyId');
    const storedProductShopifyId = '8758648307947' // element?.getAttribute('product-id');

    // const storedProductShopifyId = '7866350043319'
    // const product = useSelector((state: RootState) => state.productsData.product);
    const endpoint = ProdIds.filter(prod => prod.productId === storedProductShopifyId);

    const handleClose = () => {
        const bg = document.getElementById('web-modal');
        const modal = document.getElementById('modal');

        if (modal && bg) {
            bg.style.display = "none";
            modal.style.display = "none";

        }

        setIsVisible(false);
    };

    const handleOpen = () => {
        // const button = document.getElementById('wearify-button');
        // if (button) {
        //     button.style.display = 'none';
        // }
        setIsVisible(true);
    };

    useEffect(() => {
        const button = document.getElementById('wearify-button');
        if (button) {
            button.addEventListener('click', handleOpen);
        }

        return () => {
            if (button) {
                button.removeEventListener('click', handleOpen);
            }
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <IframeWrapper>
                    <IFrame src={endpoint[0]?.depar_link} onClose={handleClose} />
                </IframeWrapper>
            )}
        </div>
    );
};

export default IframeContainer;
