import Route from './navigation';
import { GlobalStyle } from './styles/globalStyles';
import '../src/styles/styles.css';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Route />
    </>
  );
};