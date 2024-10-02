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

const Step3 = () => {
    const values = useSelector((state: RootState) => state.values);
    const { isProcessing } = useSelector((state: RootState) => state.stages);
    const { uploadImage, defaultImage, isFemale, age, skinTone } = useSelector((state: RootState) => state.values);
    const imageSource: string | null | any = uploadImage?.source || defaultImage?.source;

    const dispatch = useDispatch();

    // const element = document.getElementById('web-modal');
    // const productId = element?.getAttribute('product-id');
    // const productId = '8752854466795'

    // const foundProduct = data.find(product => product.id === productId);
    const productId = '58';
    const endpoint = ProdIds.filter(prod => prod.productId === productId)

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

        try {
            // TODO
            // Problem to clo-set url has benn this row
            const response = await fetch(imageSource);
            // const response = await fetch('https://style.clo-set.com/fitting/VHFF%2FhHOfsJJDtlwD7hvZg%3D%3D?ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none');

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
            closetURL: foundProduct?.closet_url,
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
    });

    console.log(foundProduct?.image_url, 'foundProduct?.image_url')

    return (
        <div>
            <Section>
                <Box>
                    <Image1
                        // src={foundProduct?.image_url!} //762C7T4op8Y4w1cZ7
                        src='https://drive.google.com/file/d/1ss3bDleyDPMsRK38Dj3ZdAogm7kvMvzb/view?usp=sharing'
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