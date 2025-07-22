import React from 'react';
import { Box, Container, Typography, IconButton, useTheme } from '@mui/material';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const theme = useTheme();
  
  const socialLinks = [
    { 
      url: 'https://github.com/krn3122',
      label: 'GitHub',
      icon: FaGithub,
      color: '#4CAF50'
    },
    { 
      url: 'https://linkedin.com/feed/',
      label: 'LinkedIn',
      icon: FaLinkedin,
      color: '#2196F3'
    },
    { 
      url: 'https://instagram.com/mehraakrn__/',
      label: 'Instagram',
      icon: FaInstagram,
      color: '#f44336'
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        background: 'linear-gradient(135deg, rgba(37, 38, 43, 0.98) 0%, rgba(44, 62, 80, 0.98) 100%)',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
        }
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Box 
            sx={{ 
              display: 'flex',
              gap: 3,
            }}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <IconButton
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  sx={{
                    padding: 1,
                    color: 'rgba(255, 255, 255, 0.8)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      color: link.color,
                    }
                  }}
                >
                  {Icon ({size: 24})}
                </IconButton>
              );
            })}
          </Box>
          <Box
            sx={{
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            <Typography 
              variant="body2" 
              sx={{ 
                fontWeight: 500,
                letterSpacing: '0.5px',
                mb: 1
              }}
            >
              © {new Date().getFullYear()} Bhupendar Mehra
            </Typography>
            <Typography 
              variant="caption"
              sx={{
                opacity: 0.8,
                letterSpacing: '0.3px',
              }}
            >
              All rights reserved
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;