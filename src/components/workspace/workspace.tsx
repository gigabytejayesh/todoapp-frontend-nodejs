import LeftSideBar, { buttonStyles } from '../sidebar/left-sidebar';
import { userProps } from '../../common/interfaces/user-props';
import { Box, Button, Container, Grid, IconButton, Typography, Fab } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import moment from 'moment';
import { Add } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';

function isMobileDevice() {
	const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	return viewportWidth < 768; // Adjust the breakpoint as needed
}

export default function Workspace(props: userProps) {
	const { user } = props;

	const [drawerItemName, setDrawerItemName] = useState("Today's Task");

	return (
		<div style={{ display: 'flex', marginBottom: 2 }}>
			<LeftSideBar user={user} setDrawerItemName={setDrawerItemName} />
			<Grid container justifyContent="space-between">
				<Grid>
					<Typography
						variant="h6"
						noWrap
						sx={{
							m: 3,
							display: { xs: 'flex', md: 'flex', lg: 'flex' },
							fontFamily: 'sans-serif',
							fontWeight: 700,
							color: 'darkviolet',
						}}
					>
						{drawerItemName}
					</Typography>
				</Grid>
				<Grid>
					<IconButton aria-label="notifications" sx={{ m: 2, mt: 3, color: 'darkviolet' }}>
						<NotificationsIcon />
					</IconButton>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						{isMobileDevice() ? (
							<MobileDatePicker
								sx={{ mt: 2, mr: 10 }}
								format="YYYY-MM-DD"
								label="Select Date 🗓️"
								defaultValue={dayjs(moment().format('YYYY-MM-DD'))}
							/>
						) : (
							<DatePicker
								sx={{ mt: 2, mr: 10 }}
								format="YYYY-MM-DD"
								label="Select Date 🗓️"
								defaultValue={dayjs(moment().format('YYYY-MM-DD'))}
							/>
						)}
					</LocalizationProvider>
				</Grid>
			</Grid>
			<Grid container justifyContent="center">
				<img src="ruko-zara-sabar-karo.jpg" alt="Hindustani bhau" />
			</Grid>
		</div>
	);
}
