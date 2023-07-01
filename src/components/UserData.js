
import Button from '@mui/material/Button';
import { Avatar, Stack, Box, CircularProgress } from '@mui/material';
import NoUser from './NoUser';

export default function UserData({ picture, username, hasError, isLoading, onButtonClick }) {
    return (
        <Stack direction="column" alignItems="left" spacing={2}>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" onClick={() => onButtonClick()} disabled={isLoading}>Next user</Button>
                    {isLoading ? (
                        <CircularProgress />
                    ) : (<span></span>)}

                </Stack>
            </Box>
            {hasError ? (
                <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <NoUser></NoUser>
                </Box>
            ) : (
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar alt="Image no available" src={picture.thumbnail}></Avatar>
                    <div>
                        {username.first} {username.last}
                    </div>
                </Stack>
            )
            }
        </Stack>
    );
}