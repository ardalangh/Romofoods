import './App.css';
import ProductModel from './components/ProductModel';
import {Route, Routes} from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import Box from '@mui/material/Box';


function App() {
    return (
        <Box
            className="App"
            sx={{
                display: 'flex',
                height: "100vh"
            }}
        >
            {/*<Routes>*/}
            {/*    <Route path="/" element={<ProductModel/>} />*/}
            {/*</Routes>*/}
            <HeaderBar/>
        </Box>
    );
}

export default App;