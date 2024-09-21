import IframeWrapper from 'components/Iframe';
import Navigation from 'components/Popup/navigation';

import { closetUrl } from 'utils/tests/__tests__';


const Step1 = () => {

    return (
        <>
            <IframeWrapper src={closetUrl} />
            <Navigation />
        </>
    )
};

export default Step1;