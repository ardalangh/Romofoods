import './App.css';
import ProductModel from './components/ProductModel';
import {Route, Routes} from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import Box from '@mui/material/Box';
import MainPage from './pages/MainPage';
import ProductPage from "./pages/ProductPage";
import React from "react";
import ContactUS from "./pages/ContactUS";
import PinnedLocation from "./components/PinnedLocation";


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
                <Route path="/contactUs" element = {<ContactUS/>}></Route>
                <Route path="/locations" element = {<PinnedLocation/>}/>
            </Routes>



        </Box>
    );
}

export default App;