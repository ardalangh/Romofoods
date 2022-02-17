import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import {Link} from "react-router-dom";


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const HeaderBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

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


				<Button>
					<Typography sx={{fontFamily: 'Space Mono, monospace',  color:'#8e8e8e'}}>Contact us</Typography>
				</Button>
				<Button>
					<Typography sx={{fontFamily: 'Space Mono, monospace',  color:'#8e8e8e'}}>Locations</Typography>
				</Button>
				<Button>
					<Typography sx={{fontFamily: 'Space Mono, monospace', color:'#8e8e8e'}}>Nutrients</Typography>
				</Button>


				<Link
					to="/productPage"
				>
					<Button>
						<Typography sx={{fontFamily: 'Space Mono, monospace', color:'#8e8e8e'}}>Product Detail</Typography>
					</Button>
				</Link>

			</Box>


	);
};
export default HeaderBar;
