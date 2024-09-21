import ImageUpload from 'components/UploadImage';

import { Texts } from 'utils/constants';

import { Box, H3, Text } from './styles';


const Step1 = () => {

    return (
        <div>
            <H3>{Texts.reference}</H3>
            <ImageUpload />
            <Box>
                <Text>{Texts.individualPhoto}</Text>
                <Text>{Texts.notice}</Text>
            </Box>
        </div>
    )
};

export default Step1;