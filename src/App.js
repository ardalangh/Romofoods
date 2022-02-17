import './App.css';
import ProductModel from './components/ProductModel';
import {Route, Routes} from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import Box from '@mui/material/Box';
import MainPage from './pages/MainPage';
import ProductPage from "./pages/ProductPage";
import React from "react";


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
                <Route path="/productPage" element={ <ProductPage/>} />
            </Routes>



        </Box>
    );
}

export default App;