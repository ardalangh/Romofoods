import React from 'react';
import PistachiImg from "../contactBG.jpg";
import Box from "@mui/material/Box";
import ContactUsForm from "../components/ContactUsForm";




function ContactUs(props) {
    return (

        <Box sx = {{
            backgroundImage :`url(${PistachiImg})`,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent : 'center',
            padding : '26%'
        }}>
        <ContactUsForm/>
        </Box>
    );
}

export default ContactUs;