import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, Avatar, Button, IconButton, Stack, keyframes } from '@mui/material';
import { Email as EmailIcon } from '@mui/icons-material';
import { LinkedIn, GitHub, Instagram } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Animation keyframes
const float = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(-20px) }
  100% { transform: translateY(0px) }
`;

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #2D1950, 0 0 35px #2D1950, 0 0 40px #2D1950 }
  50% { box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 25px #fff, 0 0 30px #2D1950, 0 0 45px #2D1950, 0 0 50px #2D1950 }
  100% { box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #2D1950, 0 0 35px #2D1950, 0 0 40px #2D1950 }
`;

const rotateGlow = keyframes`
  0% {
    transform: rotate(0deg);
    box-shadow: 0 0 20px #fff, 0 0 30px #2D1950, 0 0 40px #2D1950;
  }
  50% {
    transform: rotate(180deg);
    box-shadow: 0 0 30px #fff, 0 0 40px #4A266A, 0 0 50px #4A266A;
  }
  100% {
    transform: rotate(360deg);
    box-shadow: 0 0 20px #fff, 0 0 30px #2D1950, 0 0 40px #2D1950;
  }
`;

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      maxWidth: number;
      maxHeight: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.maxWidth = canvasWidth;
        this.maxHeight = canvasHeight;
        this.x = Math.random() * this.maxWidth;
        this.y = Math.random() * this.maxHeight;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > this.maxWidth) this.x = 0;
        if (this.x < 0) this.x = this.maxWidth;
        if (this.y > this.maxHeight) this.y = 0;
        if (this.y < 0) this.y = this.maxHeight;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      // Connect particles with lines
      particles.forEach(particle1 => {
        particles.forEach(particle2 => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: 'linear-gradient(135deg, #2D1950 0%, #4A266A 100%)',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1,
              type: "spring",
              stiffness: 100
            }}
            style={{ flex: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3.5rem' },
                  background: 'linear-gradient(45deg, #FFF 30%, #e0e0e0 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 20px rgba(255,255,255,0.1)',
                }}
              >
                Hi, I'm Bhupendar Mehra
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography
                variant="h2"
                sx={{
                  mb: 4,
                  fontSize: { xs: '1.5rem', md: '2.5rem' },
                  opacity: 0.9,
                  background: 'linear-gradient(45deg, #FFF 30%, #e0e0e0 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 15px rgba(255,255,255,0.1)',
                }}
              >
                Computer Science Engineer
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.2rem', md: '1.8rem' },
                  opacity: 0.8,
                  mb: 6,
                  background: 'linear-gradient(45deg, #FFF 30%, #e0e0e0 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 10px rgba(255,255,255,0.1)',
                }}
              >
                Turning Ideas into Reality through Code
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.8,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              style={{ marginTop: '2rem' }}
              whileHover={{ scale: 1.02 }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToContact}
                  startIcon={<EmailIcon />}
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                    borderRadius: '30px',
                    padding: '12px 30px',
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  Get in Touch
                </Button>
                <IconButton
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      transform: 'translateY(-2px) scale(1.1)',
                      boxShadow: '0 5px 15px rgba(255,255,255,0.2)'
                    }
                  }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  href="https://github.com/krn3122"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      transform: 'translateY(-2px) scale(1.1)',
                      boxShadow: '0 5px 15px rgba(255,255,255,0.2)'
                    }
                  }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://www.instagram.com/mehraakrn__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      transform: 'translateY(-2px) scale(1.1)',
                      boxShadow: '0 5px 15px rgba(255,255,255,0.2)'
                    }
                  }}
                >
                  <Instagram />
                </IconButton>
              </Stack>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              bounce: 0.4
            }}
            whileHover={{ scale: 1.05 }}
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Avatar
              src="https://res.cloudinary.com/dtjjgiitl/image/upload/q_auto:good,f_auto,fl_progressive/v1752936966/ew4ir1dpa9j7yyfs4gha.jpg"
              alt="Bhupendar Mehra"
              sx={{
                width: { xs: 200, md: 300 },
                height: { xs: 200, md: 300 },
                border: '4px solid rgba(255, 255, 255, 0.3)',
                position: 'relative',
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
                }
              }}
            />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;