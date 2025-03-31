import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
  { name: 'About', path: '/' },
  { name: 'Career', path: '/career' },
  { name: 'Recommendations', path: '/recommendations' },
  { name: 'Bits & Bobs', path: '/bits-and-bobs' }
];
const drawerItems = [
  ...navItems,
  {
    name: 'Contact',
    path: '/contact'
  }
];
const title = 'Christopher Scirone';

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {title}
      </Typography>

      <Divider />

      <List>
        {drawerItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link to={item.path} key={item.name} className="nav-link">
                <Button sx={{ color: 'text.primary' }}>
                  {item.name}
                </Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar component="nav" position="sticky">
        <Toolbar sx={{ flexDirection: { xs: 'row', sm: 'column'} }}>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }} >
            {title}
          </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>  

          <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', sm: 'flex' }}}>
            {navItems.map((item) => (
              <Link to={item.path} key={item.name}>
                <Button sx={{ color: '#fff' }}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </Stack>

        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;