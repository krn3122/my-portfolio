import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About', 'Education', 'Projects', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileOpen) {
      handleDrawerToggle();
    }
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={scrolled ? 4 : 0}
        sx={{
          background: scrolled 
            ? 'rgba(10, 25, 47, 0.85)'  // Changed to a more transparent dark blue
            : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',  // Only apply blur when scrolled
          transition: 'all 0.3s ease-in-out',
          boxShadow: scrolled 
            ? '0 4px 20px rgba(0, 0, 0, 0.1)' 
            : 'none',
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              fontWeight: 600,
              background: 'linear-gradient(45deg, #3894F0, #33EDED)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Bhupendar Mehra
          </Typography>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 3 }}>
              {menuItems.map((item) => (
                <Typography
                  key={item}
                  variant="button"
                  sx={{
                    cursor: 'pointer',
                    position: 'relative',
                    color: 'white',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: -4,
                      left: 0,
                      background: 'linear-gradient(45deg, #3894F0, #33EDED)',
                      transition: 'width 0.3s ease-in-out',
                    },
                    '&:hover': {
                      '&:after': {
                        width: '100%',
                      },
                    },
                  }}
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            background: 'linear-gradient(135deg, rgba(37, 38, 43, 0.98) 0%, rgba(44, 62, 80, 0.98) 100%)',
            color: 'white',
          }
        }}
      >
        <List sx={{ pt: 4 }}>
          {menuItems.map((item) => (
            <ListItemButton
              key={item}
              onClick={() => scrollToSection(item)}
              sx={{
                my: 0.5,
                mx: 2,
                borderRadius: 2,
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              <ListItemText 
                primary={item} 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    fontSize: '1rem',
                    fontWeight: 500
                  }
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Toolbar />
    </>
  );
};

export default Navbar;