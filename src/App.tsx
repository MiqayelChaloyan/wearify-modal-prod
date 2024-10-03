import { useEffect } from 'react';

import Route from './navigation';
import { useDispatch } from 'react-redux';
import { addData } from 'store/redux/features/productsDataState';

import { getClothesData } from 'api/data';
import { GlobalStyle } from './styles/globalStyles';

import '../src/styles/styles.css';

export default function App() {
  const dispatch = useDispatch();

  // localStorage.setItem('productShopifyId', '8752854466795');

  useEffect(() => {
    const fetchClothesData = async () => {
      try {
        const { data } = await getClothesData();
        dispatch(addData(data));
      } catch (error) {
        console.error("Error fetching clothes data:", error);
      }
    };

    fetchClothesData();
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Route />

      {/* <img src='https://drive.google.com/file/d/1ss3bDleyDPMsRK38Dj3ZdAogm7kvMvzb/view' alt='f'/> */}
      {/* <img src='https://drive.google.com/thumbnail?id=1ss3bDleyDPMsRK38Dj3ZdAogm7kvMvzb' alt='f'/> */}
    </>
  );
};