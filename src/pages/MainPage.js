import React from 'react';
import HeaderBar from '../components/HeaderBar';
import ProductModel from '../components/ProductModel';
import ProductPage from "./ProductPage";
import ContactUS from "./ContactUS";
import PinnedLocation from "../components/PinnedLocation";


function MainPage(props) {
    return (

        <>
            <HeaderBar/>
            <ProductModel/>
            {/*<PinnedLocation/>*/}
        </>

    );
}

export default MainPage;