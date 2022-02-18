import React from 'react';
import PistachiImg from "../contactBG.jpg";
import Box from "@mui/material/Box";
import ContactUsForm from "../components/ContactUsForm";
import {Link} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import {Bungalow} from "@mui/icons-material";
import BungalowIcon from "@mui/icons-material/Bungalow";


function ContactUs(props) {
    return (



            <Box sx={{
                backgroundImage: `url(${PistachiImg})`,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '26%'
            }}>
                <ContactUsForm/>
            </Box>

    );
}

export default ContactUs;