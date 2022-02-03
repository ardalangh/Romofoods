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
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>

				<Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex', justifyContent: 'center'}}}>
					<Button
						onClick={handleCloseNavMenu}
						sx={{my: 2, color: 'white', display: 'block'}}
					>
						{'page'}
					</Button>
					<Button
						onClick={handleCloseNavMenu}
						sx={{my: 2, color: 'white', display: 'block'}}
					>
						{'page'}
					</Button>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
					>
						LOGO
					</Typography>
					<Button
						onClick={handleCloseNavMenu}
						sx={{my: 2, color: 'white', display: 'block'}}
					>
						{'page'}
					</Button>
					<Button
						onClick={handleCloseNavMenu}
						sx={{my: 2, color: 'white', display: 'block'}}
					>
						{'page'}
					</Button>
				</Box>
				</Toolbar>
			</Container>
		</AppBar>);
};
export default HeaderBar;
