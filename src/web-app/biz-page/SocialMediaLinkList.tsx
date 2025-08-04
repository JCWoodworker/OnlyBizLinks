import {
	Instagram,
	Facebook,
	LinkedIn,
	X,
	YouTube,
	Pinterest,
} from "@mui/icons-material"
import { Box, IconButton, Link } from "@mui/material"
import { SocialMediaLink } from "../../stores/BusinessStore"

interface SocialMediaLinkListProps {
	businessSocialMediaLinks: SocialMediaLink[]
}

const SocialMediaLinkList: React.FC<SocialMediaLinkListProps> = ({
	businessSocialMediaLinks,
}) => {
	const socialMediaComponents = [
		{
			platform: "facebook",
			component: <Facebook />,
			color: "#1877F2",
			hoverColor: "#166FE5",
		},
		{
			platform: "instagram",
			component: <Instagram />,
			color: "#E4405F",
			hoverColor: "#C13584",
		},
		{
			platform: "linkedin",
			component: <LinkedIn />,
			color: "#0A66C2",
			hoverColor: "#004182",
		},
		{
			platform: "x",
			component: <X />,
			color: "#000000",
			hoverColor: "#1D1D1D",
		},
		{
			platform: "youtube",
			component: <YouTube />,
			color: "#FF0000",
			hoverColor: "#CC0000",
		},
		{
			platform: "pinterest",
			component: <Pinterest />,
			color: "#BD081C",
			hoverColor: "#9A0610",
		},
	]

	const activeSocialLinks = businessSocialMediaLinks.filter(
		(link) => link.is_active
	)

	if (activeSocialLinks.length === 0) {
		return null
	}

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: 1,
				p: 2,
				borderRadius: 3,
				background: "linear-gradient(145deg, #fafafa 0%, #f5f5f5 100%)",
				border: "1px solid",
				borderColor: "grey.200",
				boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
			}}
		>
			{activeSocialLinks.map((link) => {
				const socialMediaInfo = socialMediaComponents.find(
					(component) => component.platform === link.social_media_platform
				)

				if (!socialMediaInfo) return null

				return (
					<Link
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						key={link.social_media_platform}
						sx={{ textDecoration: "none" }}
					>
						<IconButton
							sx={{
								color: socialMediaInfo.color,
								backgroundColor: "white",
								border: "2px solid",
								borderColor: "grey.300",
								width: 48,
								height: 48,
								borderRadius: 2,
								boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
								transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
								"&:hover": {
									color: socialMediaInfo.hoverColor,
									backgroundColor: "grey.50",
									borderColor: socialMediaInfo.color,
									transform: "translateY(-2px)",
									boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
								},
								"&:active": {
									transform: "translateY(0)",
									boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
								},
							}}
						>
							{socialMediaInfo.component}
						</IconButton>
					</Link>
				)
			})}
		</Box>
	)
}

export default SocialMediaLinkList
