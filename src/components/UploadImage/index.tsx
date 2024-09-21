import React, { useCallback, useRef, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { useSelector, useDispatch } from 'react-redux';
import { ADD_IMAGE, DELETE_IMAGE } from 'store/redux/features/valuesState';
import { RootState } from 'store/redux';

import { FiUploadCloud } from 'react-icons/fi';

import RemoveImage from 'components/RemoveImage';

import { Options } from 'utils/constants';

import { colors } from 'themes';

import { Box, Text, Button, Icon, Image, ImageButton } from './styles';


const ImageUpload = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const uploadImage = useSelector((state: RootState) => state.values.uploadImage);
    const dispatch = useDispatch();

    const fileSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];

        if (selectedFile) {
            const newImageURL = {
                id: uuidv4(),
                source: URL.createObjectURL(selectedFile),
            };

            dispatch(ADD_IMAGE(newImageURL));
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleSubmit = useCallback(() => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }, [isOpen]);

    const handleDelete = useCallback(() => {
        dispatch(DELETE_IMAGE());
        setIsOpen(false);
    }, []);


    return (
        <>
            <input
                type="file"
                ref={fileInputRef}
                onChange={fileSelectedHandler}
                style={{ display: 'none' }}
            />
            <div>
                <Box>
                    <Button onClick={handleUploadClick}>
                        <Icon>
                            <FiUploadCloud size={22} color={colors.lightGray} />
                        </Icon>
                        <Text>
                            {Options.upload}
                        </Text>
                    </Button>
                    {uploadImage && (
                        <ImageButton onClick={handleSubmit}>
                            <Image src={uploadImage.source} alt={uploadImage.id} />
                        </ImageButton>
                    )}
                </Box>
            </div>
            {isOpen && <RemoveImage handleSubmit={handleSubmit} handleDelete={handleDelete} />}
        </>
    );
};

export default ImageUpload;
