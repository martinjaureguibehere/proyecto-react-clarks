import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './LoadingSpinner.css';

const LoadingSpinner = ({display}) => {

    return (
        <Box className="loadingSpinner" sx={display}>
            <CircularProgress />
        </Box>
    )
}

export default LoadingSpinner;