import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_DATA } from 'store/redux/features/valuesState';
import { RootState } from 'store/redux';

import { FEMALE_IMAGES, MALE_IMAGES } from 'utils/helpers';
import { Subtitles } from 'utils/constants';

import { PersonAttribute } from 'types';

import { Box, Button, Image, Subtitle, Text } from './styles';


const Step2 = () => {
    const { isFemale, skinTone, age } = useSelector((state: RootState) => state.values);
    console.log(isFemale, 'isFemale')
    const data = isFemale ? FEMALE_IMAGES : MALE_IMAGES;
    const dispatch = useDispatch();

    const handleChangeSkin = (skinTone: PersonAttribute) => {
        dispatch(UPDATE_DATA({ skinTone }));
    };

    const handleChangeAge = (age: PersonAttribute) => {
        dispatch(UPDATE_DATA({ age }));
    };

    const skinTones = data.SKIN_TONE.map((skinToneItem: PersonAttribute) => (
        <Button $isActive={skinToneItem.ID == skinTone?.ID} key={skinToneItem.ID} onClick={() => handleChangeSkin(skinToneItem)}>
            <Image src={skinToneItem.source} alt={skinToneItem.ID} loading="lazy" />
            <Text>{skinToneItem.Skin}</Text>
        </Button>
    ));

    const ages = data.AGE.map((item: PersonAttribute) => (
        <Button $isActive={item.ID == age?.ID} key={item.ID} onClick={() => handleChangeAge(item)}>
            <Image src={item.source} alt={item.ID} loading="lazy" />
            <Text>{item.Age}</Text>
        </Button>
    ));

    return (
        <div>
            <Subtitle>
                {Subtitles.skinTone}
            </Subtitle>
            <Box>
                {skinTones}
            </Box>
            <Subtitle>
                {Subtitles.age}
            </Subtitle>
            <Box>
                {ages}
            </Box>
        </div>
    )
};

export default Step2;