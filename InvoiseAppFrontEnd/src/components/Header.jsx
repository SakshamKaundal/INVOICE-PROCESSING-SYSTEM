import {AppBar, Toolbar, Typography} from '@mui/material'


const Header = () => {
    return (
        <AppBar >
            <Toolbar  position="static" style={{ alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" style={{ fontFamily: 'Helvetica, Arial, sans-serif', color: '#333' }}>
                        Invoice
                    </Typography>
                <img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-21-512.png' alt='logo' style={{width:60}}/>
            
            </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;