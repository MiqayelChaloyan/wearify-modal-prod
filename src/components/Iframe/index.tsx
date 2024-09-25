import { useEffect, useState, useRef } from 'react';

import { useDispatch } from 'react-redux';
import { handleSwitchLoading } from 'store/redux/features/loaderCloSetState';

import IframeLoad from '../IframeLoad';

import { Box, Container, HideBorder, Iframe } from './styles';


type Props = {
  src?: string;
};

const IFrame = ({ src }: Readonly<Props>) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const dispatch = useDispatch();

  const modal = document.getElementById('web-modal');

  useEffect(() => {
    const iframe = iframeRef.current;

    if (iframe) {
      const handleLoad = () => {
        setLoaded(true);
        dispatch(handleSwitchLoading());
      };

      iframe.addEventListener('load', handleLoad);

      return () => {
        iframe.removeEventListener('load', handleLoad);
      };
    }
  }, [modal, dispatch]); 

  return (
    <>
      {!loaded && (
        <Box>
          <IframeLoad />
        </Box>
      )}
      <Iframe
        $loaded={loaded}
        title="iframe"
        ref={iframeRef}
        src={src}
        frameBorder="0"
        id="myIframe"
        loading="eager"
      />
    </>
  );
};

const IframeWrapper = ({ src }: Readonly<Props>) => {
  return (
    <Container>
      <HideBorder />
      <IFrame src={src} />
    </Container>
  );
};

export default IframeWrapper;
