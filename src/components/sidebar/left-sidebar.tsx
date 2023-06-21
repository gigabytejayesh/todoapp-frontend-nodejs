import {
	Avatar,
	Box,
	Button,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import TodayIcon from '@mui/icons-material/Today';
import ListIcon from '@mui/icons-material/List';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import TaskIcon from '@mui/icons-material/Task';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Add } from '@mui/icons-material';
import { userProps } from '../../common/interfaces/user-props';

const drawerWidth = 310;

export const buttonStyles = {
	m: 2,
	'@media(max-width: 600px)': {
		fontSize: '14px',
		padding: '8px 16px',
	},
	'@media(max-width: 400px)': {
		fontSize: '12px',
		padding: '6px 12px',
	},
};

export default function LeftSideBar({ user, setDrawerItemName }: userProps) {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [avatar, setAvatar] = React.useState('');
	const [selectedIndex, setSelectedIndex] = React.useState('1');

	React.useEffect(() => {
		setAvatar(user.avatar);
	}, [user]);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleListItemClick = async (selectedIndexText: string, index: string) => {
		setSelectedIndex(index);
		setDrawerItemName(selectedIndexText);
	};

	const handleLogoutUser = () => {};

	const drawer = (
		<div>
			<Toolbar>
				<Typography
					variant="h6"
					noWrap
					component="a"
					href="/"
					sx={{
						ml: 6.5,
						display: { xs: 'flex', md: 'flex' },
						fontFamily: 'monospace',
						fontWeight: 700,
						letterSpacing: '.3rem',
						color: 'inherit',
						textDecoration: 'none',
					}}
				>
					MY-TODO-APP
				</Typography>
			</Toolbar>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
					gap: '16px',
					alignItems: 'center',
				}}
			>
				<Avatar
					alt={user.name}
					src={avatar}
					sx={{
						mt: 1,
						width: 65,
						height: 65,
						display: { xs: 'flex', md: 'flex' },
						justifyContent: 'center',
						justifySelf: 'center',
						justifyItems: 'center',
						alignItems: 'center',
					}}
				/>
				<Typography
					variant="subtitle1"
					sx={{
						display: { xs: 'flex', md: 'flex' },
						fontFamily: 'cursive',
						justifyContent: 'center',
						justifySelf: 'center',
						justifyItems: 'center',
						alignItems: 'center',
					}}
				>
					{user.name}
				</Typography>
				<Button variant="contained" color="secondary" size="large" startIcon={<Add />} sx={buttonStyles}>
					Add New Task
				</Button>
			</div>
			<Divider />
			<List component="nav" aria-label="main mailbox folders">
				<ListItemButton
					selected={selectedIndex === '1'}
					onClick={async (event) => await handleListItemClick(event.currentTarget.innerText, '1')}
				>
					<ListItemIcon>
						<TodayIcon
							style={{
								color: selectedIndex === '1' ? 'darkviolet' : '',
							}}
						/>
					</ListItemIcon>
					<ListItemText
						primary="Today's Tasks"
						style={{
							color: selectedIndex === '1' ? 'darkviolet' : '',
						}}
					/>
				</ListItemButton>
				<ListItemButton
					selected={selectedIndex === '2'}
					onClick={async (event) => await handleListItemClick(event.currentTarget.innerText, '2')}
				>
					<ListItemIcon>
						<ListIcon
							style={{
								color: selectedIndex === '2' ? 'darkviolet' : '',
							}}
						/>
					</ListItemIcon>
					<ListItemText
						primary="All Tasks"
						style={{
							color: selectedIndex === '2' ? 'darkviolet' : '',
						}}
					/>
				</ListItemButton>
				<ListItemButton
					selected={selectedIndex === '3'}
					onClick={async (event) => await handleListItemClick(event.currentTarget.innerText, '3')}
				>
					<ListItemIcon>
						<KeyboardDoubleArrowUpIcon
							style={{
								color: selectedIndex === '3' ? 'darkviolet' : '',
							}}
						/>
					</ListItemIcon>
					<ListItemText
						primary="High Priority"
						style={{
							color: selectedIndex === '3' ? 'darkviolet' : '',
						}}
					/>
				</ListItemButton>
				<ListItemButton
					selected={selectedIndex === '4'}
					onClick={async (event) => await handleListItemClick(event.currentTarget.innerText, '4')}
				>
					<ListItemIcon>
						<KeyboardDoubleArrowDownIcon
							style={{
								color: selectedIndex === '4' ? 'darkviolet' : '',
							}}
						/>
					</ListItemIcon>
					<ListItemText
						primary="Low Priority"
						style={{
							color: selectedIndex === '4' ? 'darkviolet' : '',
						}}
					/>
				</ListItemButton>
				<ListItemButton
					selected={selectedIndex === '5'}
					onClick={async (event) => await handleListItemClick(event.currentTarget.innerText, '5')}
				>
					<ListItemIcon>
						<TaskIcon
							style={{
								color: selectedIndex === '5' ? 'darkviolet' : '',
							}}
						/>
					</ListItemIcon>
					<ListItemText
						primary="Completed"
						style={{
							color: selectedIndex === '5' ? 'darkviolet' : '',
						}}
					/>
				</ListItemButton>
			</List>
			<div
				style={{
					position: 'absolute',
					bottom: 0,
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
					gap: '16px',
					alignItems: 'center',
					justifySelf: 'center',
					width: '100%',
				}}
			>
				<Button
					variant="outlined"
					color="secondary"
					size="large"
					startIcon={<PowerSettingsNewIcon />}
					sx={buttonStyles}
					onClick={handleLogoutUser}
				>
					Logout
				</Button>
			</div>
		</div>
	);

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					sx={{ mr: 2, display: { sm: 'none' } }}
				>
					<MenuIcon />
				</IconButton>
			</Toolbar>
			<Box
				component="nav"
				sx={{
					width: { sm: drawerWidth },
					flexShrink: { sm: 0 },
				}}
				aria-label="mailbox folders"
			>
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
						backgroundColor: '#fef9e7',
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
						backgroundColor: '#fef9e7',
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				{/* Workspace code */}
			</Box>
		</Box>
	);
}
