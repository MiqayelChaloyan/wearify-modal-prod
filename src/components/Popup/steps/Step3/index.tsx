import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { proceedToStageTwo } from 'store/redux/features/stagesState';
import { handleSwitchStatusPopup } from 'store/redux/features/popupState';
import { RootState } from 'store/redux';

import Loader from 'components/Loader';

import { FaArrowRight } from 'react-icons/fa6';

import { colors } from 'themes';

import { Texts } from 'utils/constants';

import { closetData } from 'utils/tests/__tests__';

import { Box, Image1, Image2, Loading, Section, Text } from './styles';


const Step3 = () => {
    const values = useSelector((state: RootState) => state.values);
    const { isStageOneProcessing } = useSelector((state: RootState) => state.stages);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(handleSwitchStatusPopup());
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(proceedToStageTwo());
            return handleSubmit();
        }, 60000); // 60 seconds (1 minutes)

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Section>
                <Box>
                    <Image1 src={closetData.imgPath} alt={closetData.id} />
                </Box>
                <FaArrowRight size={20} color={colors.lightGray} />
                <Box>
                    <Image2 src={values.uploadImage?.source || values.defaultImage?.source} alt={values.uploadImage?.id} />
                </Box>
            </Section>

            <Loading>
                <Text>{Texts.loading}</Text>
                <Loader duration={60} isActive={isStageOneProcessing} />
            </Loading>
        </div>
    )
};

export default Step3;