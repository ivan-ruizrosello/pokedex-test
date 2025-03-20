import AppWrapper from './App.style';
import { ToastContainer } from 'react-toastify';

import PokedexScreen from './screens/pokedex/PokedexScreen';

const App = () => {
    return (
        <AppWrapper>
            <PokedexScreen />
            <ToastContainer />
        </AppWrapper>
    );
};

export default App;
