import React, { useState, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  Stack,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import IconWrapper from './shared/IconWrapper';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.send(
        'service_mu8nzdk',    // Your service ID
        'template_jp2rmz6',   // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Bhupendar Mehra',
        },
        'GlE9CCf_7Z7VCuexN'  // Your public key
      );

      if (result.text === 'OK') {
        setSnackbarMessage('Message sent successfully! I will get back to you soon.');
        setSnackbarSeverity('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      let errorMessage = 'Failed to send message. Please try again later.';
      
      if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`;
        console.log('Detailed error:', {
          name: error.name,
          message: error.message,
          stack: error.stack
        });
      }
      
      setSnackbarMessage(errorMessage);
      setSnackbarSeverity('error');
    } finally {
      setLoading(false);
      setOpenSnackbar(true);
    }
  };

  const contactInfo = [
    {
      icon: <IconWrapper Icon={FaEnvelope} size={32} />,
      title: 'Email',
      content: 'mehrahimanshu783@gmail.com',
    },
    {
      icon: <IconWrapper Icon={FaPhone} size={32} />,
      title: 'Phone',
      content: '+91 7668337784',
    },
    {
      icon: <IconWrapper Icon={FaMapMarkerAlt} size={32} />,
      title: 'Location',
      content: 'Haldwani, Uttarakhand, India',
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        minHeight: '100vh',
        backgroundColor: '#0a192f',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom
            sx={{
              color: '#fff',
            }}
          >
            Contact Me
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            paragraph 
            sx={{ 
              mb: 6,
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            Let's Get in Touch
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <form ref={form} onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255,255,255,0.5)',
                          },
                          '&.Mui-error fieldset': {
                            borderColor: 'error.main',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255,255,255,0.7)',
                        },
                        '& .MuiFormHelperText-root': {
                          color: 'error.main',
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255,255,255,0.5)',
                          },
                          '&.Mui-error fieldset': {
                            borderColor: 'error.main',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255,255,255,0.7)',
                        },
                        '& .MuiFormHelperText-root': {
                          color: 'error.main',
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255,255,255,0.5)',
                          },
                          '&.Mui-error fieldset': {
                            borderColor: 'error.main',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255,255,255,0.7)',
                        },
                        '& .MuiFormHelperText-root': {
                          color: 'error.main',
                        },
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={loading}
                      startIcon={loading && <CircularProgress size={20} color="inherit" />}
                      sx={{
                        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                          opacity: 0.9,
                        },
                        '&:disabled': {
                          background: 'rgba(255,255,255,0.12)',
                          color: 'rgba(255,255,255,0.3)',
                        },
                      }}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Stack>
                </form>
              </Paper>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Stack spacing={3}>
                {contactInfo.map((info, index) => (
                  <Paper
                    key={index}
                    elevation={3}
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <Box sx={{ color: '#2196F3', fontSize: '2rem' }}>
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ color: '#fff' }}>
                        {info.title}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                        {info.content}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Stack>
            </Box>
          </Box>
        </motion.div>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setOpenSnackbar(false)} 
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;