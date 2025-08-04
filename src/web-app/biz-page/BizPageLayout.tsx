import { Box, Typography, Container, Card } from "@mui/material"
import SocialMediaLinkWrapper from "./SocialMediaLinkWrapper"
import LinkList from "./LinkList"
import { useBusinessStore } from "../../stores/BusinessStore"

const BizPageLayout: React.FC = () => {
	const businessName = useBusinessStore((state) => state.businessName)
	const businessLogo: string | null = useBusinessStore(
		(state) => state.businessLogo
	)

	return (
		<Container
			maxWidth="sm"
			sx={{
				py: { xs: 4, md: 6 },
				px: { xs: 2, md: 3 },
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "center",
					gap: { xs: 4, md: 5 },
				}}
			>
				{/* Logo/Business Name Section */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 2,
					}}
				>
					{businessLogo && (
						<Card
							elevation={0}
							sx={{
								p: 3,
								borderRadius: 4,
								background: "linear-gradient(145deg, #f5f5f5 0%, #ffffff 100%)",
								border: "1px solid",
								borderColor: "grey.200",
								maxWidth: { xs: "90vw", sm: "350px" },
								width: "100%",
							}}
						>
							<Box
								component="img"
								src={businessLogo}
								alt={`${businessName} logo`}
								sx={{
									width: "100%",
									maxWidth: "280px",
									height: "auto",
									objectFit: "contain",
									borderRadius: 2,
									filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))",
								}}
							/>
						</Card>
					)}
					{!businessLogo && (
						<Typography
							variant="h2"
							component="h1"
							sx={{
								fontWeight: 700,
								fontSize: { xs: "2rem", md: "2.5rem" },
								background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								mb: 2,
							}}
						>
							{businessName}
						</Typography>
					)}
				</Box>

				{/* Social Media Links */}
				<SocialMediaLinkWrapper />

				{/* Custom Links */}
				<LinkList />
			</Box>
		</Container>
	)
}

export default BizPageLayout
