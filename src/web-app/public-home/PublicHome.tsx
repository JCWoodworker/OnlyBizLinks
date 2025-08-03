import { Box, Button, Typography, Card, CardContent, Chip } from "@mui/material"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const PublicHome = () => {
	const businessList = [
		{ name: "Foolproof Brewery", domain: "foolproofbrewery", type: "Brewery" },
		{ name: "Ocean Mist", domain: "oceanmistrestaurant", type: "Restaurant" },
	]
	const navigate = useNavigate()

	return (
		<Box
			sx={{
				minHeight: "100vh",
				background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
				display: "flex",
				flexDirection: "column",
			}}
		>
			{/* Hero Section */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "center",
					pt: { xs: 6, md: 8 },
					pb: { xs: 4, md: 6 },
					px: 3,
				}}
			>
				{/* Logo Container */}
				<Box
					sx={{
						mb: 4,
						position: "relative",
						"&::before": {
							content: '""',
							position: "absolute",
							top: -20,
							left: -20,
							right: -20,
							bottom: -20,
							background:
								"linear-gradient(45deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))",
							borderRadius: "50%",
							zIndex: -1,
						},
					}}
				>
					<img
						src="https://myrestaurantlinks-images.s3.us-east-2.amazonaws.com/OnlyBizLinksLogo.svg"
						alt="OnlyBizLinks"
						style={{
							width: "200px",
							height: "200px",
							borderRadius: "20px",
							boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
						}}
					/>
				</Box>

				{/* Main Heading */}
				<Typography
					variant="h2"
					sx={{
						fontWeight: 700,
						fontSize: { xs: "2.5rem", md: "3.5rem" },
						background: "linear-gradient(45deg, #1a1a1a, #4a4a4a)",
						backgroundClip: "text",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						mb: 2,
						letterSpacing: "-0.02em",
					}}
				>
					OnlyBizLinks
				</Typography>

				{/* Subtitle */}
				<Typography
					variant="h6"
					sx={{
						color: "text.secondary",
						maxWidth: 600,
						lineHeight: 1.6,
						fontSize: { xs: "1.1rem", md: "1.25rem" },
						fontWeight: 400,
						mb: 6,
					}}
				>
					Premium digital solutions for restaurants and breweries, seamlessly
					integrated into handcrafted NFC-enabled products by RI Local Woodworks
				</Typography>
			</Box>

			{/* Business Listings Section */}
			<Box
				sx={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					px: 3,
					pb: 6,
				}}
			>
				<Typography
					variant="h4"
					sx={{
						fontWeight: 600,
						mb: 4,
						color: "text.primary",
						fontSize: { xs: "1.75rem", md: "2.125rem" },
					}}
				>
					Featured Businesses
				</Typography>

				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
						gap: 3,
						maxWidth: 800,
						width: "100%",
					}}
				>
					{businessList.map((business) => (
						<Link
							key={business.domain}
							to={`/${business.domain}`}
							style={{ textDecoration: "none" }}
						>
							<Card
								sx={{
									height: "100%",
									background: "rgba(255, 255, 255, 0.9)",
									backdropFilter: "blur(10px)",
									border: "1px solid rgba(255, 255, 255, 0.2)",
									borderRadius: "20px",
									transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
									cursor: "pointer",
									"&:hover": {
										transform: "translateY(-8px)",
										boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
										background: "rgba(255, 255, 255, 0.95)",
									},
								}}
							>
								<CardContent
									sx={{
										p: 4,
										textAlign: "center",
										"&:last-child": { pb: 4 },
									}}
								>
									<Chip
										label={business.type}
										sx={{
											mb: 2,
											backgroundColor: "primary.main",
											color: "white",
											fontWeight: 500,
											fontSize: "0.75rem",
										}}
									/>
									<Typography
										variant="h5"
										sx={{
											fontWeight: 600,
											color: "text.primary",
											mb: 1,
											fontSize: { xs: "1.25rem", md: "1.5rem" },
										}}
									>
										{business.name}
									</Typography>
									<Typography
										variant="body2"
										sx={{
											color: "text.secondary",
											fontWeight: 500,
										}}
									>
										View Menu & Links
									</Typography>
								</CardContent>
							</Card>
						</Link>
					))}
				</Box>
			</Box>

			{/* Contact & CTA Section */}
			<Box
				sx={{
					background:
						"linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
					backdropFilter: "blur(20px)",
					py: 6,
					px: 3,
					textAlign: "center",
					borderTop: "1px solid rgba(255,255,255,0.3)",
				}}
			>
				<Typography
					variant="body1"
					sx={{
						color: "text.secondary",
						mb: 3,
						maxWidth: 500,
						mx: "auto",
						fontSize: "1rem",
						lineHeight: 1.6,
					}}
				>
					Interested in premium NFC solutions for your business?
				</Typography>

				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", sm: "row" },
						gap: 2,
						justifyContent: "center",
						alignItems: "center",
						mb: 4,
					}}
				>
					<Button
						variant="contained"
						href="mailto:jc@rilocalwoodworks.com"
						sx={{
							py: 1.5,
							px: 4,
							borderRadius: "12px",
							textTransform: "none",
							fontWeight: 600,
							fontSize: "1rem",
							background: "linear-gradient(45deg, #2196F3, #1976D2)",
							boxShadow: "0 8px 25px rgba(33, 150, 243, 0.3)",
							"&:hover": {
								transform: "translateY(-2px)",
								boxShadow: "0 12px 30px rgba(33, 150, 243, 0.4)",
							},
						}}
					>
						Get in Touch
					</Button>

					<Button
						variant="outlined"
						onClick={() => navigate("/signin")}
						sx={{
							py: 1.5,
							px: 4,
							borderRadius: "12px",
							textTransform: "none",
							fontWeight: 600,
							fontSize: "1rem",
							borderColor: "primary.main",
							color: "primary.main",
							"&:hover": {
								backgroundColor: "primary.main",
								color: "white",
								transform: "translateY(-2px)",
								boxShadow: "0 8px 25px rgba(33, 150, 243, 0.2)",
							},
						}}
					>
						Business Sign In
					</Button>
				</Box>

				<Typography
					variant="caption"
					sx={{
						color: "text.secondary",
						fontSize: "0.875rem",
					}}
				>
					Crafted with precision by RI Local Woodworks
				</Typography>
			</Box>
		</Box>
	)
}

export default PublicHome
