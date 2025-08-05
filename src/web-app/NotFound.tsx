import { Box, Typography, Button, Fade, Zoom } from "@mui/material"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const NotFound = () => {
	const navigate = useNavigate()
	const [countdown, setCountdown] = useState(3)
	const [showContent, setShowContent] = useState(false)

	useEffect(() => {
		const redirectToHome = () => {
			navigate("/")
		}

		// Defer the state update to avoid render cycle warning
		const showTimeout = setTimeout(() => {
			setShowContent(true)
		}, 100)

		const timer = setInterval(() => {
			setCountdown((prev) => {
				if (prev <= 1) {
					clearInterval(timer)
					redirectToHome()
					return 0
				}
				return prev - 1
			})
		}, 1000)

		return () => {
			clearTimeout(showTimeout)
			clearInterval(timer)
		}
	}, [navigate])

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "100vh",
				background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
				padding: "20px",
				position: "relative",
				overflow: "hidden",
				"&::before": {
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background:
						"radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%)",
					pointerEvents: "none",
				},
			}}
		>
			<Fade in={showContent} timeout={800}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						textAlign: "center",
						zIndex: 1,
						maxWidth: "400px",
						width: "100%",
					}}
				>
					<Zoom in={showContent} timeout={1000}>
						<Box
							sx={{
								fontSize: "120px",
								marginBottom: "20px",
								filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
								animation: "float 3s ease-in-out infinite",
								"@keyframes float": {
									"0%, 100%": { transform: "translateY(0)" },
									"50%": { transform: "translateY(-10px)" },
								},
							}}
						>
							🤷‍♀️
						</Box>
					</Zoom>

					<Typography
						variant="h4"
						sx={{
							color: "white",
							fontWeight: "bold",
							marginBottom: "16px",
							textShadow: "0 2px 4px rgba(0,0,0,0.3)",
							fontSize: { xs: "1.8rem", sm: "2.125rem" },
							lineHeight: 1.2,
						}}
					>
						Oops! Business Not Found
					</Typography>

					<Typography
						variant="body1"
						sx={{
							color: "rgba(255, 255, 255, 0.9)",
							marginBottom: "32px",
							fontSize: "1.1rem",
							lineHeight: 1.5,
							textShadow: "0 1px 2px rgba(0,0,0,0.2)",
						}}
					>
						We searched everywhere, but this business seems to have vanished
						into thin air! ✨
					</Typography>

					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: "20px",
							width: "100%",
						}}
					>
						<Button
							component={Link}
							to="/"
							variant="contained"
							size="large"
							sx={{
								backgroundColor: "rgba(255, 255, 255, 0.95)",
								color: "#5a67d8",
								fontWeight: "bold",
								fontSize: "1rem",
								padding: "12px 32px",
								borderRadius: "50px",
								textTransform: "none",
								boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
								transition: "all 0.3s ease",
								width: "100%",
								maxWidth: "280px",
								"&:hover": {
									backgroundColor: "white",
									transform: "translateY(-2px)",
									boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
								},
								"&:active": {
									transform: "translateY(0)",
								},
							}}
						>
							🏠 Take Me Home
						</Button>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "8px",
								backgroundColor: "rgba(255, 255, 255, 0.1)",
								padding: "12px 20px",
								borderRadius: "25px",
								backdropFilter: "blur(10px)",
								border: "1px solid rgba(255, 255, 255, 0.2)",
							}}
						>
							<Typography
								variant="body2"
								sx={{
									color: "rgba(255, 255, 255, 0.8)",
									fontSize: "0.9rem",
								}}
							>
								Auto-redirecting in {countdown}s
							</Typography>
							<Box
								sx={{
									width: "20px",
									height: "20px",
									borderRadius: "50%",
									border: "2px solid rgba(255, 255, 255, 0.3)",
									borderTop: "2px solid white",
									animation: "spin 1s linear infinite",
									"@keyframes spin": {
										"0%": { transform: "rotate(0deg)" },
										"100%": { transform: "rotate(360deg)" },
									},
								}}
							/>
						</Box>
					</Box>
				</Box>
			</Fade>

			{/* Floating decorative elements */}
			<Box
				sx={{
					position: "absolute",
					width: "100px",
					height: "100px",
					borderRadius: "50%",
					background: "rgba(255, 255, 255, 0.1)",
					top: "10%",
					right: "10%",
					animation: "float 4s ease-in-out infinite",
					animationDelay: "0s",
				}}
			/>
			<Box
				sx={{
					position: "absolute",
					width: "60px",
					height: "60px",
					borderRadius: "50%",
					background: "rgba(255, 255, 255, 0.08)",
					bottom: "20%",
					left: "15%",
					animation: "float 5s ease-in-out infinite",
					animationDelay: "1s",
				}}
			/>
			<Box
				sx={{
					position: "absolute",
					width: "80px",
					height: "80px",
					borderRadius: "50%",
					background: "rgba(255, 255, 255, 0.06)",
					top: "60%",
					right: "20%",
					animation: "float 6s ease-in-out infinite",
					animationDelay: "2s",
				}}
			/>
		</Box>
	)
}

export default NotFound
