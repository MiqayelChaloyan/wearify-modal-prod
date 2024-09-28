import React, { useEffect, useState } from 'react';

import { getStorage, ref, getDownloadURL } from 'firebase/storage';

import { Image, ImageError } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from 'store/redux';

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
                // console.log(url, '------------------------------------')
                setUrl(url)
            })
            .catch(_ => {
                console.log(_, 'error');
            })
    }, []);

    if (!url) {
        return (
            <div>
                <ImageError
                    src='https://drive.google.com/thumbnail?id=1CNWYLynGX3S1nOCZIJblI9GBuCFzpYE1'
                    alt='result not found'
                    loading="lazy"
                />
            </div>
        )
    }

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