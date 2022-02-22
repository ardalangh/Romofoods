import React, {useState} from 'react';
import {TextField} from "@mui/material";



const processPropsNameForLabel = (propsName) =>  {
    const res = propsName.replace( /([A-Z])/g, " $1" )
    return res.charAt(0).toUpperCase() + res.slice(1);
}




function ContactUsTextInput(props) {

    const [value, setValue] = useState("")

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <TextField
            InputProps={{style: {fontFamily: 'Arial', color: 'white'}}}
            variant="filled"
            color="success" focused
            id={props.name}
            label = {processPropsNameForLabel(props.name)}
            value={value}
            onChange={handleChange}
        />
    );
}

export default ContactUsTextInput;