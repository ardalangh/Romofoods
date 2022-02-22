import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DetailPageTypography from "./DetailPageTypography";
import IconButton from "@mui/material/IconButton";
import BungalowIcon from "@mui/icons-material/Bungalow";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import ContactUsTextInput from "./ContactUsTextInput";
import {useState} from "react";

export default function ContactUsForm() {
    const [message, setMessage] = useState()

    return (
        <>
            <Box sx={{
                backgroundColor: 'primary.dark',
                color: "white",
                background: `rgba(0, 0, 0, 0.6)`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1% 5%'
            }}>
                <Box>
                    <Link to='/'>
                        <IconButton aria-label="home"
                                    sx={{
                                        border: "1px solid white"
                                    }}>

                            <BungalowIcon fontSize={'large'} sx={{
                                color: 'white',
                            }}/>
                        </IconButton>
                    </Link>

                    <DetailPageTypography color="textPrimary">
                        info@romofoods.com
                    </DetailPageTypography>
                    <DetailPageTypography>
                        Please E-mail us to place an order. As of now, we are wholesaling to retailers and food services
                        within the greater S.F. Bay Area.
                    </DetailPageTypography>
                    <DetailPageTypography>
                        Manufactured at: Concord, CA 94520 - U.S.A.
                    </DetailPageTypography>

                </Box>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '25ch',},
                        '& label.Mui-focused': {color: 'white'},
                        '& label.Mui-color': {color: 'white'},

                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>

                        <ContactUsTextInput name="name"/>
                        <ContactUsTextInput name="lastName"/>
                        <ContactUsTextInput name="email"/>
                        <ContactUsTextInput name="phoneNumber"/>

                        <TextField
                            InputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                            variant="filled"
                            color="success" focused
                            id="outlined-multiline-static"
                            label="Message"
                            multilinee
                            rows={4}
                            value={message}
                        />
                        <Button variant="contained">Submit</Button>
                    </div>
                </Box>

            </Box>
        </>
    );
}