import IframeLoad from 'components/IframeLoad';
import { Box } from './styles';


const SplashScreen = () => {
  const element = document.getElementById('web-modal');
  const productShopifyId = element?.getAttribute('product-id');

  if (productShopifyId) {
    localStorage.setItem('productShopifyId', productShopifyId);
  }

  return (
    <Box>
      <IframeLoad />
    </Box>
  )
};

export default SplashScreen;
