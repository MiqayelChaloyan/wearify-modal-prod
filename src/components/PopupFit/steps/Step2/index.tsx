import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_DATA } from 'store/redux/features/valuesState';
import { RootState } from 'store/redux';

import { FEMALE_IMAGES, MALE_IMAGES } from 'utils/helpers';
import { Subtitles } from 'utils/constants';

import { Skin } from 'types';

import { Box, Button, Div, Image, Subtitle, Text } from './styles';


const Step2 = () => {
    const { isFemale, skin } = useSelector((state: RootState) => state.values);
    // const values = useSelector((state: RootState) => state.values);

    const data = isFemale ? FEMALE_IMAGES : MALE_IMAGES;
    const dispatch = useDispatch();

    const handleChangeSkin = (skinType: Skin) => {
        dispatch(UPDATE_DATA({ skin: skinType }));
    };

    const skinTones = data.SKIN.map((skinToneItem: Skin) => (
        <Button $isActive={skinToneItem.ID == skin?.ID} key={skinToneItem.ID} onClick={() => handleChangeSkin(skinToneItem)}>
            <Image src={skinToneItem.source} alt={skinToneItem.title} loading="lazy" />
            <Text>{skinToneItem.title}</Text>
        </Button>
    ));

    return (
        <Div>
            <Subtitle>
                {Subtitles.skinTone}
            </Subtitle>
            <Box>
                {skinTones}
            </Box>
        </Div>
    )
};

export default Step2;