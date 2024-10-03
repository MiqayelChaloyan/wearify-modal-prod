import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setProcessingState, setStageTwoProcessing } from 'store/redux/features/stagesState';
import { handleSwitchStatusPopup } from 'store/redux/features/popupState';
import { RootState } from 'store/redux';

import Loader from 'components/Loader';

import { FaArrowRight } from 'react-icons/fa6';

import { colors } from 'themes';
import { Image } from 'types';

import { Texts } from 'utils/constants';
// import { data } from 'utils/tests/__tests__';

import { Box, Image1, Image2, Loading, Section, Text } from './styles';

import { ref, set } from 'firebase/database';
import { database, storage } from 'firebaseDatabase';
import { uploadBytes, ref as sRef } from 'firebase/storage';
import { getGenaiData } from 'api/genaiApi';

import { ProdIds } from 'utils/helpers/products';

const Step3 = ({ goTo }: any) => {
    const values = useSelector((state: RootState) => state.values);
    const { isProcessing } = useSelector((state: RootState) => state.stages);
    const { uploadImage, defaultImage, isFemale, age, skinTone } = useSelector((state: RootState) => state.values);
    const imageSource: string | null | any = uploadImage?.source || defaultImage?.source;
    const product = useSelector((state: RootState) => state.productsData.product);


    const dispatch = useDispatch();

    // const element = document.getElementById('web-modal');
    // const productShopifyId = element?.getAttribute('product-id');
    // const storedProductShopifyId = localStorage.getItem('productShopifyId');
    const storedProductShopifyId = '7866351386807'

    const endpoint = ProdIds.filter(prod => prod.productId === storedProductShopifyId)

    const productsData = useSelector((state: RootState) => state.productsData.data);
    const foundProduct = productsData.find(product => product?.id == endpoint[0]?.id);

    const handleSubmit = () => {
        dispatch(handleSwitchStatusPopup());
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setProcessingState(false));
            dispatch(setStageTwoProcessing(true));
            handleSubmit();
        }, 25000); // 25 seconds 

        return () => clearTimeout(timer);
    }, []);


    const userId = uploadImage?.id || defaultImage?.id;

    const _handleSet = async () => {
        const presetModelResultId = await getGenaiData(isFemale, skinTone?.Skin, age?.Age);
console.log(values, 'foundProduct?.closet_url')

        try {
            // TODO
            const response = await fetch(imageSource);


            const blob = await response.blob();
            const newFile = new File([blob], 'example.png', { type: blob.type });

            const storageRef = sRef(storage, `WEB/${userId}/avatar_${userId}.png`);

            uploadBytes(storageRef, newFile);
        } catch (_) {
            console.log('File upload error', _)
        }

        set(ref(database, 'avatars/' + userId), {
            isLoading: true,
            isAvatarError: false,
        }).catch(err => console.log(err));


        set(ref(database, 'new/' + userId), {
            closetURL: values?.closetUrlAPI,
            status: 'new',
            presetBackground: '033',
            presetModel: presetModelResultId,
        }).catch(err => console.log(err))
    };

    useEffect(() => {
        const fetchData = async () => {
            await _handleSet();
        };

        fetchData();
    }, []);


    return (
        <div>
            <Section>
                <Box>
                    <Image1
                        src={endpoint[0]?.product_img}
                        alt={foundProduct?.closet_url}
                        loading="lazy"
                    />
                </Box>
                <FaArrowRight size={20} color={colors.lightGray} />
                <Box>
                    <Image2
                        src={values.uploadImage?.source || values.defaultImage?.source}
                        alt={values.uploadImage?.id}
                        loading="lazy"
                    />
                </Box>
            </Section>
            <Loading>
                <Text>{Texts.loading}</Text>
                <Loader duration={25} isActive={isProcessing} />
            </Loading>
        </div>
    )
};

export default Step3;