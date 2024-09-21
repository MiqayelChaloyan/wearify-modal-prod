import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_DATA } from 'store/redux/features/valuesState';
import { RootState } from 'store/redux';

import { FEMALE_IMAGES, MALE_IMAGES } from 'utils/helpers';
import { Subtitles } from 'utils/constants';

import { PersonAttribute } from 'types';

import { Box, Button, Image, Subtitle, Text } from './styles';


const Step2 = () => {
    const { isFemale, skin, age } = useSelector((state: RootState) => state.values);
    const data = isFemale ? FEMALE_IMAGES : MALE_IMAGES;
    const dispatch = useDispatch();

    const handleChangeSkin = (skinId: string) => {
        dispatch(UPDATE_DATA({ skin: skinId }));
    };

    const handleChangeAge = (ageId: string) => {
        dispatch(UPDATE_DATA({ age: ageId }));
    };

    const skinTones = data.SKIN_TONE.map((skinTone: PersonAttribute) => (
        <Button $isActive={skinTone.ID == skin} key={skinTone.ID} onClick={() => handleChangeSkin(skinTone.ID)}>
            <Image src={skinTone.source} alt={skinTone.ID} />
            <Text>{skinTone.Skin}</Text>
        </Button>
    ));

    const ages = data.AGE.map((item: PersonAttribute) => (
        <Button $isActive={item.ID == age} key={item.ID} onClick={() => handleChangeAge(item.ID)}>
            <Image src={item.source} alt={item.ID} />
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