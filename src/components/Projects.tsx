import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, CardActions, Button, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
	{
		title: 'Local Cab Booking System',
		description:
			'A user-friendly cab booking platform built with HTML, CSS, and JavaScript. Features include real-time booking, driver tracking, and fare estimation.',
		image: 'https://images.fastcompany.com/image/upload/f_webp,c_fit,w_1920,q_auto/fc/3015343-poster-taxicabs.jpg',
		technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
		githubLink: 'https://github.com/krn3122/local-cabbooking-system',
		liveLink: 'https://krn3122.github.io/local-cabbooking-system/',
		category: 'Web Development',
	},
	{
		title: 'Jarvis AI Assistant',
		description:
			'A Python-based AI assistant that can perform various tasks like opening applications, playing music, and providing information through voice commands.',
		image: 'https://imgcdn.stablediffusionweb.com/2024/11/19/28a9ed03-01c8-428f-a2d1-10031b79ffc9.jpg',
		technologies: ['Python', 'Speech Recognition', 'AI', 'APIs'],
		githubLink: 'https://github.com/krn3122/jarvis__',
		liveLink: 'https://github.com/krn3122/jarvis__',
		category: 'AI & Automation',
	},
	{
		title: 'Portfolio Website',
		description:
			'My personal portfolio website showcasing my projects and skills. Built with React, TypeScript, and Material-UI with smooth animations and responsive design.',
		image: 'https://boringstudios.com.au/cdn/shop/files/Artboard1-100_2939ec06-bb2d-4ba5-8405-56f9d1d1454e.jpg?v=1738823329&width=3000',
		technologies: ['React', 'TypeScript', 'Material-UI', 'Framer Motion'],
		githubLink: 'https://github.com/krn3122/portfolio-krn',
		liveLink: 'https://krn3122.github.io/portfolio-krn',
		category: 'Web Development',
	},
];

const Projects = () => {
	return (
		<Box
			id="projects"
			component={motion.div}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
			sx={{
				py: 12,
				backgroundColor: '#fafafa',
				backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
			}}
		>
			<Container maxWidth="xl">
				<motion.div
					initial={{ y: -30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
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
							mb: 1,
						}}
					>
						Featured Projects
					</Typography>
					<Typography
						variant="h5"
						align="center"
						sx={{
							mb: 8,
							color: '#666',
							fontWeight: 300,
						}}
					>
						Showcasing My Technical Expertise
					</Typography>
				</motion.div>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'stretch',
						width: '100%',
					}}
				>
					<Stack
						direction={{ xs: 'column', md: 'row' }}
						spacing={4}
						sx={{
							width: '100%',
							maxWidth: '1400px',
							justifyContent: 'center',
							alignItems: 'stretch',
						}}
					>
						{projects.map((project, index) => (
							<Box
								key={index}
								sx={{
									width: { xs: '100%', md: '380px' },
									flex: { xs: '1 1 auto', md: '0 0 380px' },
								}}
							>
								<motion.div
									initial={{ y: 50, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.2 }}
									style={{ height: '100%' }}
								>
									<Card
										component={motion.div}
										whileHover={{
											y: -10,
											transition: { duration: 0.3 },
										}}
										sx={{
											height: '100%',
											display: 'flex',
											flexDirection: 'column',
											borderRadius: 2,
											overflow: 'hidden',
											boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
											position: 'relative',
											'&:before': {
												content: '""',
												position: 'absolute',
												top: 0,
												left: 0,
												right: 0,
												height: '4px',
												background:
													'linear-gradient(45deg,rgb(56, 148, 240) 30%,rgb(51, 237, 237) 90%)',
											},
										}}
									>
										<CardMedia
											component="img"
											height="220"
											image={project.image}
											alt={project.title}
											sx={{
												objectFit: 'cover',
												transition: 'transform 0.3s ease-in-out',
												'&:hover': {
													transform: 'scale(1.05)',
												},
											}}
										/>
										<Box
											sx={{
												position: 'absolute',
												top: 10,
												right: 10,
												bgcolor: 'rgba(0,0,0,0.6)',
												color: 'white',
												px: 2,
												py: 0.5,
												borderRadius: 5,
												fontSize: '0.875rem',
											}}
										>
											{project.category}
										</Box>
										<CardContent sx={{ flexGrow: 1, p: 3 }}>
											<Typography
												gutterBottom
												variant="h5"
												component="h2"
												sx={{
													fontWeight: 600,
													color: '#2c3e50',
													fontSize: '1.25rem',
													mb: 2,
													minHeight: '40px',
												}}
											>
												{project.title}
											</Typography>
											<Typography
												sx={{
													mb: 2,
													color: '#666',
													fontSize: '0.95rem',
													lineHeight: 1.6,
													height: '80px',
													overflow: 'hidden',
													display: '-webkit-box',
													WebkitLineClamp: 3,
													WebkitBoxOrient: 'vertical',
												}}
											>
												{project.description}
											</Typography>
											<Box
												sx={{
													display: 'flex',
													flexWrap: 'wrap',
													gap: 1,
													mb: 2,
													minHeight: '60px',
												}}
											>
												{project.technologies.map((tech, techIndex) => (
													<Chip
														key={techIndex}
														label={tech}
														size="small"
														sx={{
															bgcolor: 'rgba(56, 148, 240, 0.1)',
															color: 'rgb(56, 148, 240)',
															'&:hover': {
																bgcolor: 'rgba(56, 148, 240, 0.2)',
															},
														}}
													/>
												))}
											</Box>
										</CardContent>
										<CardActions sx={{ p: 2, pt: 0, justifyContent: 'center' }}>
											<Button
												href={project.githubLink}
												target="_blank"
												rel="noopener noreferrer"
												variant="contained"
												sx={{
													background:
														'linear-gradient(45deg,rgb(56, 148, 240) 30%,rgb(51, 237, 237) 90%)',
													color: 'white',
													px: 4,
													py: 1.5,
													borderRadius: '50px',
													fontSize: '0.95rem',
													fontWeight: 500,
													letterSpacing: '0.5px',
													textTransform: 'none',
													transition: 'all 0.3s ease-in-out',
													'&:hover': {
														background:
															'linear-gradient(45deg,rgb(51, 237, 237) 30%,rgb(56, 148, 240) 90%)',
														transform: 'translateY(-2px)',
														boxShadow: '0 6px 20px rgba(56, 148, 240, 0.3)',
													},
													'&:active': {
														transform: 'translateY(1px)',
														boxShadow: '0 2px 10px rgba(56, 148, 240, 0.2)',
													},
												}}
											>
												View Project
											</Button>
										</CardActions>
									</Card>
								</motion.div>
							</Box>
						))}
					</Stack>
				</Box>
			</Container>
		</Box>
	);
};

export default Projects;