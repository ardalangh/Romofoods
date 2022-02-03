import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react';
import logo from '../logo.png';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import {Divider} from '@material-ui/core';


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
					padding: '0 5%',
					background: `url(${logo}) scroll right bottom no-repeat`,

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
					}}>ROMO FOODS</Typography>
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

			</Box>


	);
};
export default HeaderBar;

{/*<Toolbar disableGutters>*/
}
{/*	<Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'flex', justifyContent: 'center'}}}>*/
}
{/*		<Button*/
}
{/*			onClick={handleCloseNavMenu}*/
}
{/*			sx={{my: 2, color: '#598525', display: 'block'}}*/
}
{/*		>*/
}
{/*			{'page'}*/
}
{/*		</Button>*/
}
{/*		<Button*/
}
{/*			onClick={handleCloseNavMenu}*/
}
{/*			sx={{my: 2, color: '#598525', display: 'block'}}*/
}
{/*		>*/
}
{/*			{'page'}*/
}
{/*		</Button>*/
}

{/*		<img src={logo} width="100px"/>*/
}
{/*			<*/
}
{/*				Button*/
}
{/*				onClick={handleCloseNavMenu}*/
}
{/*				sx={{my: 2, color: '#598525', display: 'block'}}*/
}
{/*			>*/
}
{/*				{'page'}*/
}
{/*			</Button>*/
}
{/*			<Button*/
}
{/*				onClick={handleCloseNavMenu}*/
}
{/*				sx={{my: 2, color: '#598525', display: 'block'}}*/
}
{/*			>*/
}
{/*				{'page'}*/
}
{/*			</Button>*/
}
{/*	</Box>*/
}
{/*</Toolbar>*/
}