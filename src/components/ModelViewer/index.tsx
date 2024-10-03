import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { handleSwitchLoading } from 'store/redux/features/loaderCloSetState';

import IframeLoad from 'components/IframeLoad';

import { Box } from './styles';


interface ModelViewerProps {
    glbSrc?: any;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ glbSrc }) => {
    const [loaded, setLoaded] = useState<boolean>(false);
    const dispatch = useDispatch();


    useEffect(() => {
        const modelViewer = document.querySelector('model-viewer');

        const handleModelLoaded = () => {
            setTimeout(() => {
                setLoaded(true);
                dispatch(handleSwitchLoading());
            }, 2500);
        };

        modelViewer?.addEventListener('load', handleModelLoaded);

        return () => {
            modelViewer?.removeEventListener('load', handleModelLoaded);
        };
    }, []);


    return (
        <div className='viewer'>
            {!loaded && (
                <Box>
                    <IframeLoad />
                </Box>
            )}
            <model-viewer
                src={glbSrc}
                seamless-poster
                environment-image='neutral'
                shadow-intensity='1'
                autoplay
                ar
                ar-modes='webxr scene-viewer quick-look'
                camera-controls
                touch-action='pan-y'
                auto-rotate
                interaction-prompt-threshold='1500'
                enable-pan
                style={{ display: loaded ? 'block' : 'none'}}
                min-field-of-view='1deg'
                disable-zoom
                loading='eager'
            >
            </model-viewer>
        </div>
    );
};

export default ModelViewer;
