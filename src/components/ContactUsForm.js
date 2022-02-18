import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DetailPageTypography from "./DetailPageTypography";
import IconButton from "@mui/material/IconButton";
import BungalowIcon from "@mui/icons-material/Bungalow";
import {Link} from "react-router-dom";

export default function ContactUsForm() {
    const [value, setValue] = React.useState();
    const [name, setName] = React.useState();
    const [LastName, setLastName] = React.useState();
    const [email, setEmail] = React.useState();
    const [number, setNumber] = React.useState();
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <Box sx={{
                display: 'flex',

            }}>
                <Box>
                    <Link to='/'>
                        <IconButton aria-label="home"
                                    sx={{
                                        border: "1px solid white"
                                    }}>
                            ç
                            <BungalowIcon fontSize={'large'} sx={{
                                color: 'white',
                            }}/>
                        </IconButton>
                    </Link>

                    <DetailPageTypography>
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
                        '& .MuiTextField-root': {m: 1, width: '25ch'},
                        '& label.Mui-focused': {color: 'white'},
                        '& label.Mui-color': {color: 'white'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="outlined-name"
                            label="Name"
                            value={name}
                            onChange={handleChange}
                        />
                        <TextField
                            id="outlined-name"
                            label="Last Name"
                            value={LastName}
                            onChange={handleChange}
                        />

                        <TextField
                            id="outlined-name"
                            label="Phone Number"
                            value={number}
                            onChange={handleChange}
                        />
                        <TextField
                            id="outlined-name"
                            label="Email"
                            value={email}
                            onChange={handleChange}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multilinee
                            rows={4}
                            defaultValue="Default Value"
                        />
                    </div>
                </Box>

            </Box>
        </>
    );
}