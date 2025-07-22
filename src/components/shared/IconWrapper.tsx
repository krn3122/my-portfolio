import React from 'react';
import { IconType } from 'react-icons';
import { Box, SxProps, Theme } from '@mui/material';

interface IconWrapperProps {
  Icon: IconType;
  size?: number;
  color?: string;
  sx?: SxProps<Theme>;
}

const IconWrapper = ({ Icon, size = 24, color, sx }: IconWrapperProps): React.ReactElement => {
  return (
    <Box 
      className="icon-wrapper" 
      sx={{ 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.1)',
        },
        ...sx
      }}
    >
      {Icon({ size, color })}
    </Box>
  );
};

export default IconWrapper;

