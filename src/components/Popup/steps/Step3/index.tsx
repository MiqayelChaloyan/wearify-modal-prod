import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { proceedToStageTwo } from 'store/redux/features/stagesState';
import { handleSwitchStatusPopup } from 'store/redux/features/popupState';
import { RootState } from 'store/redux';

import Loader from 'components/Loader';

import { FaArrowRight } from 'react-icons/fa6';

import { colors } from 'themes';

import { Product } from 'types';

import { Texts } from 'utils/constants';
import { data } from 'utils/tests/__tests__';

import { Box, Image1, Image2, Loading, Section, Text } from './styles';


const Step3 = () => {
    const values = useSelector((state: RootState) => state.values);
    const { isStageOneProcessing } = useSelector((state: RootState) => state.stages);
    const dispatch = useDispatch();

    const [product, setProduct] = useState<Product | undefined>(undefined);

    useEffect(() => {
        const element = document.getElementById('web-modal');
        const productId = element?.getAttribute('product-id');
        // const productId = '8752854466795' // AZAT MARD

        if (productId) {
            const foundProduct = data.find(product => product.id === productId);
            setProduct(foundProduct);
        }
    }, []);

    const handleSubmit = () => {
        dispatch(handleSwitchStatusPopup());
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(proceedToStageTwo());
            handleSubmit();

        }, 25000); // 25 seconds 

        return () => clearTimeout(timer);
    }, []);


    return (
        <div>
            <Section>
                <Box>
                    <Image1 src={product?.imgPath} alt={product?.id} />
                </Box>
                <FaArrowRight size={20} color={colors.lightGray} />
                <Box>
                    <Image2 src={values.uploadImage?.source || values.defaultImage?.source} alt={values.uploadImage?.id} />
                </Box>
            </Section>

            <Loading>
                <Text>{Texts.loading}</Text>
                <Loader duration={25} isActive={isStageOneProcessing} />
            </Loading>
        </div>
    )
};

export default Step3;