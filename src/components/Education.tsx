import React from 'react';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaDownload } from 'react-icons/fa';
import IconWrapper from './shared/IconWrapper';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      },
    },
  };

  const timelineVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/bsm.pdf'; // Path relative to public directory
    link.download = 'bsm.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      id="education"
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      sx={{
        py: 12,
        backgroundColor: '#ffffff',
        backgroundImage: 'linear-gradient(180deg,rgb(255, 255, 255) 0%,rgb(224, 224, 224) 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(180deg, transparent 0%, rgb(250, 250, 250) 100%)',
        }
      }}
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
          >
            <Typography 
            variant="h2" 
            align="center" 
            gutterBottom
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg,rgb(56, 148, 240) 30%,rgb(51, 237, 237) 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3
            }}
          >
            Education Journey
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            paragraph 
            sx={{ 
              mb: 8,
              color: '#666',
              fontWeight: 300
            }}
          >
            Building a Strong Foundation in Technology
          </Typography>
          </motion.div>

          <Timeline position="alternate">
            {[
              {
                title: 'BCA',
                institution: 'Graphic Era Hill University',
                period: '2022 - 2025',
                details: 'Focused on core computer science concepts, Web development, Python development and modern technologies.'
              },
              {
                title: 'Higher Secondary Education',
                institution: '12th Standard',
                period: '2021 - 2022',
                details: 'Specialized in Science and Mathematics, laying the groundwork for engineering studies.'
              },
              {
                title: 'Secondary Education',
                institution: '10th Standard',
                period: '2019 - 2020',
                details: 'Built strong fundamentals in science and mathematics with excellent academic performance.'
              }
            ].map((education, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <motion.div
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                    initial={{ rotate: 0 }}
                  >
                    <TimelineDot 
                      sx={{ 
                        background: 'linear-gradient(45deg,rgb(56, 148, 240) 30%,rgb(51, 237, 237) 90%)',
                        p: 1.2, // Changed from p: 2 to p: 1.2 for smaller size
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <IconWrapper Icon={FaGraduationCap} size={16} /> {/* Changed size from 24 to 16 */}
                    </TimelineDot>
                  </motion.div>
                  {index < 2 && <TimelineConnector sx={{ background: 'linear-gradient(180deg, #2196F3 0%, #21CBF3 100%)' }} />}
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div
                    variants={timelineVariants}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Paper 
                      elevation={2} 
                      sx={{ 
                        p: 3,
                        background: '#ffffff',
                        borderRadius: 2,
                        border: '1px solid rgba(0,0,0,0.05)',
                        transform: 'perspective(1000px)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                          transform: 'perspective(1000px) rotateX(2deg)',
                        }
                      }}
                    >
                      <Typography 
                        variant="h6" 
                        component="h1"
                        sx={{ 
                          fontWeight: 600,
                          color: '#1976d2',
                          mb: 1
                        }}
                      >
                        {education.title}
                      </Typography>
                      <Typography 
                        sx={{ 
                          mb: 1,
                          color: '#444',
                          fontWeight: 500
                        }}
                      >
                        {education.institution}
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: '#666',
                          mb: 2,
                          fontSize: '0.9rem'
                        }}
                      >
                        {education.period}
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: '#666',
                          fontSize: '0.95rem',
                          lineHeight: 1.6
                        }}
                      >
                        {education.details}
                      </Typography>
                    </Paper>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>

          <Box sx={{ mt: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="body1" 
                paragraph 
                align="center"
                sx={{
                  maxWidth: '800px',
                  mx: 'auto',
                  color: '#666',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  fontWeight: 300
                }}
              >
                Throughout my academic journey, I've maintained a strong focus on computer science 
                and technology. My education has equipped me with both theoretical knowledge and 
                practical skills necessary for success in the tech industry.
              </Typography>

              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  mt: 4 
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    onClick={handleDownloadCV}
                    startIcon={FaDownload ({size :18}) }
                    sx={{
                      py: 1.5,
                      px: 4,
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      borderRadius: '50px',
                      background: 'linear-gradient(45deg,rgb(56, 148, 240) 30%,rgb(51, 237, 237) 90%)',
                      boxShadow: '0 4px 20px rgba(56, 148, 240, 0.25)',
                      color: 'white',
                      textTransform: 'none',
                      '&:hover': {
                        background: 'linear-gradient(45deg,rgb(51, 237, 237) 30%,rgb(56, 148, 240) 90%)',
                        boxShadow: '0 6px 25px rgba(56, 148, 240, 0.35)',
                      }
                    }}
                  >
                    Download CV
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education;