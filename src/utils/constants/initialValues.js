import { v4 as uuidv4 } from 'uuid';
import { loacl, FEMALE_IMAGES, MALE_IMAGES } from 'utils/helpers';

const MEASUREMENTS = {
    skinTone: null,
    age: null,
    isFemale: false,
    defaultImage: null,
    uploadImage: null,
    height: 162,
    weight: 50,
    skin: null,
    closetUrl: '',
};

export const getDefaultValues = (isFemale) => {
    const defaultImageObj = loacl.find(item => item.isFemale === isFemale);
    const imagesArray = isFemale ? FEMALE_IMAGES : MALE_IMAGES;
    const skinTone = imagesArray.SKIN_TONE[3];
    const age = imagesArray.AGE[2];
    const skin = imagesArray.SKIN[0];

    return defaultImageObj && {
        id: uuidv4(),
        source: defaultImageObj.imagePath,
        skinTone: skinTone,
        age: age,
        skin: skin
    }
};

const defaultValues = getDefaultValues(MEASUREMENTS.isFemale);

MEASUREMENTS.defaultImage = {
    id: defaultValues.id,
    source: defaultValues.source
};

MEASUREMENTS.skinTone = defaultValues.skinTone;
MEASUREMENTS.age = defaultValues.age;
MEASUREMENTS.skin = defaultValues.skin;

export default MEASUREMENTS;