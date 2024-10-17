import React, { useEffect, useState } from 'react';

import { getStorage, ref, getDownloadURL } from 'firebase/storage';

import { Image, ImageError } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/redux';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Step4 = () => {
    const { uploadImage, defaultImage, isFemale, age, skinTone } = useSelector((state: RootState) => state.values);
    // const imageSource: string | any = uploadImage?.source || defaultImage?.source;
    // const { isResultAvailable } = useSelector((state: RootState) => state.stages);


    const [url, setUrl] = useState<string>('');
    const userId = uploadImage?.id || defaultImage?.id;

    const storage = getStorage();
    const starsRef = ref(storage, `WEB/${userId}/res_${userId}.png`);

    useEffect(() => {
        getDownloadURL(starsRef)
            .then((url) => {
                setUrl(url)
            })
            .catch(_ => {
                console.log(_, 'error');
            })
    }, []);

    delay(2000);

    return (
        <div>
            <Image
                src={url}
                alt='result not found'
                loading="lazy"
            />
        </div>
    )
};

export default Step4;