import * as React from 'react';
import Box from '@mui/material/Box';
import Image from "../productBg.png"

import ProductDetail from "../components/ProductDetail";
import BungalowIcon from '@mui/icons-material/Bungalow';
import IconButton from "@mui/material/IconButton";


export default function ProductPage() {


    return (
        <Box
            sx={{
                backgroundImage :`url(${Image})`,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent : 'center',
                padding : '26%'
            }}
        >


            <ProductDetail/>

        </Box>

    );
}