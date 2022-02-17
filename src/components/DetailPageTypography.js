import React from 'react';
import {Typography} from '@material-ui/core';
import {createTheme} from "@mui/system";


function DetailPageTypography(props) {
    return (
        <Typography
            align = "center"

           style = {{marginBottom : '2%',
           fontSize : "medium"}}
        >

            {props.children}

        </Typography>
    );
}

export default DetailPageTypography;