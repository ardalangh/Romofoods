import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import {useNavigate} from "react-router-dom";


const pages = ['nutrients', 'locations','productPage', 'contactUs'];

const HeaderBar = () => {
    const navigate = useNavigate()


    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 2%',
                width: '20vh',

            }}
        >
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <HorizontalRuleOutlinedIcon sx={{display: 'inline-block'}}/>
                <Typography sx={{
                    display: 'inline-block',
                    fontFamily: 'Space Mono, monospace',
                    margin: '0%',
                    letterSpacing: '0.2rem',
                    fontWeight: 'bolder',
                }}>
                    ROMOFOODS
                </Typography>
                <HorizontalRuleOutlinedIcon sx={{display: 'inline-block'}}/>
            </Box>


            {pages.map(page =>

                <Button onClick={() => navigate(`/${page}`)}>
                    <Typography sx={{fontFamily: 'Space Mono, monospace', color: '#8e8e8e'}}>{page}</Typography>
                </Button>

            )}


            {/*<Link to = "/locations" style = {{textDecoration : 'none'}}>*/}

            {/*    <Button>*/}
            {/*        <Typography sx={{fontFamily: 'Space Mono, monospace', color: '#8e8e8e'}}>Locations</Typography>*/}
            {/*    </Button>*/}

            {/*</Link>*/}

            {/*<Button>*/}
            {/*    <Typography sx={{fontFamily: 'Space Mono, monospace', color: '#8e8e8e'}}>Nutrients</Typography>*/}
            {/*</Button>*/}


            {/*<Link*/}
            {/*    to="/productPage" style = {{textDecoration : 'none' }}*/}
            {/*>*/}
            {/*    <Button>*/}
            {/*        <Typography sx={{fontFamily: 'Space Mono, monospace', color: '#8e8e8e'}}>Product Detail</Typography>*/}
            {/*    </Button>*/}
            {/*</Link>*/}


        </Box>


    );
};
export default HeaderBar;
