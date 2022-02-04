import './App.css';
import ProductModel from './components/ProductModel';
import {Route, Routes} from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import Box from '@mui/material/Box';
import MainPage from './pages/MainPage';


function App() {
    return (
        <Box
            className="App"
            sx={{
                display: 'flex',
                height: "100vh",

            }}
        >
            <Routes>
                <Route path="/" element={<MainPage/>} />
            </Routes>

        </Box>
    );
}

export default App;