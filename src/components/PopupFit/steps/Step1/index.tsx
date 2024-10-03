import ImageUpload from 'components/UploadImage';

import { Texts } from 'utils/constants';

import { Box, H3, Text } from './styles';
import SliderContainer from 'components/SliderContainer';


const Step1 = () => {

    return (
        <Box>
            <H3>{Texts.yourSizes}</H3>
            <SliderContainer />
        </Box>
    )
};

export default Step1;