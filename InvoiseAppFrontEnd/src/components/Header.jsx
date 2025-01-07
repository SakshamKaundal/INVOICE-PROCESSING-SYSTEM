import {AppBar, Toolbar} from '@mui/material'


const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <p>Invoice</p>
                <img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-21-512.png' alt='logo' style={{width:60}}/>
            </Toolbar>
        </AppBar>
    );
}

export default Header;