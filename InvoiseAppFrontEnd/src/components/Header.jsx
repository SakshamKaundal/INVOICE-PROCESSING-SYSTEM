import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('username'); // Clear any stored user data
        navigate('/login'); // Redirect to login page
    };

    return (
        <AppBar position="fixed" style={{ backgroundColor: '#3e60ce' }}>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                    variant="h6"
                    style={{
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        color: '#fff',
                        fontWeight: 'bold',
                    }}
                >
                    INVOICE
                </Typography>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: '#ff4d4d',
                        color: '#fff',
                        fontWeight: 'bold',
                        textTransform: 'none',
                    }}
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;