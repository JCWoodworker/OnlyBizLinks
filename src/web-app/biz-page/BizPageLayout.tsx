import { Box, Typography, Container, Card } from "@mui/material"
import LinkList from "./LinkList"
import SocialMediaLinkList from "./SocialMediaLinkList"

export type BusinessData = {
	id: number
	domain: string
	name: string
	logo: string
	socialLinks: SocialLink[]
	customLinks: CustomLink[]
} | null

export type CustomLink = {
	id: number
	business_id: number
	title: string
	url: string
	order: number
}

export type SocialLink = {
	id: number
	business_id: number
	social_media_platform: string
	is_active: boolean
	url: string
}

interface BizPageLayoutProps {
	businessData: BusinessData
}

const BizPageLayout: React.FC<BizPageLayoutProps> = ({ businessData }) => {

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
					{businessData?.logo && (
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
								src={businessData?.logo}
								alt={`${businessData?.name} logo`}
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
					{!businessData?.logo && (
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
							{businessData?.name}
						</Typography>
					)}
				</Box>

				{/* Social Media Links */}
				<SocialMediaLinkList businessSocialMediaLinks={businessData?.socialLinks || []} />

				{/* Custom Links */}
				<LinkList allLinks={businessData?.customLinks || []} />
			</Box>
		</Container>
	)
}

export default BizPageLayout
