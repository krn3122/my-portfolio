import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDatabase
} from 'react-icons/fa';
import { 
  SiJavascript,
  SiDjango,
  SiFlask,
  SiNumpy
} from 'react-icons/si';
import IconWrapper from './shared/IconWrapper';

const About = () => {
  const skills = [
    {
      icon: (
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 2,
          mb: 2 
        }}>
          <IconWrapper Icon={FaHtml5} size={35} color="#E44D26" />
          <IconWrapper Icon={FaCss3Alt} size={35} color="#264DE4" />
          <IconWrapper Icon={SiJavascript} size={35} color="#F7DF1E" />
          <IconWrapper Icon={FaReact} size={35} color="#61DAFB" />
        </Box>
      ),
      title: 'Web Development',
      description: 'Building responsive and dynamic web applications using React, JavaScript, and modern web technologies with a focus on performance and user experience.',
    },
    {
      icon: (
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 2,
          mb: 2 
        }}>
          <IconWrapper Icon={FaPython} size={35} color="#3776AB" />
          <IconWrapper Icon={SiDjango} size={35} color="#092E20" />
          <IconWrapper Icon={SiFlask} size={35} color="#000000" />
          <IconWrapper Icon={SiNumpy} size={35} color="#013243" />
        </Box>
      ),
      title: 'Python Development',
      description: 'Specialized in Python development with expertise in Django, Flask, and data analysis libraries for building robust applications.',
    }
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            About Me
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph sx={{ mb: 6 }}>
            A passionate Computer Science Engineer from Graphic Era Hill University
          </Typography>

          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            gap: 4,
            justifyContent: 'center' 
          }}>
            {skills.map((skill, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  p: 4,
                  flex: 1,
                  maxWidth: { md: '45%' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: (theme) => `0 10px 20px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
                  },
                }}
              >
                {skill.icon}
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  {skill.title}
                </Typography>
                <Typography 
                  color="textSecondary"
                  sx={{
                    lineHeight: 1.6
                  }}
                >
                  {skill.description}
                </Typography>
              </Paper>
            ))}
          </Box>

          <Box sx={{ mt: 6 }}>
            <Typography variant="body1" paragraph>
              I am a recent Computer Science Engineering graduate from Graphic Era Hill University, 
              passionate about creating innovative solutions through technology. My education has 
              provided me with a strong foundation in computer science principles, programming, 
              and software development.
            </Typography>
            <Typography variant="body1" paragraph>
              During my academic journey, I've worked on various projects that have helped me 
              develop practical skills in web development, and Python programming. I'm always 
              eager to learn new technologies and stay updated with 
              the latest trends in the tech industry.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 