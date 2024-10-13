import {
	Instagram,
	Facebook,
	LinkedIn,
	X,
	YouTube,
	Pinterest,
} from "@mui/icons-material"
import { List, ListItem, Link } from "@mui/material"
import { SocialMediaLink } from "../../stores/RestaurantStore"

interface SocialMediaLinkListProps {
	restaurantSocialMediaLinks: SocialMediaLink[]
}

const SocialMediaLinkList: React.FC<SocialMediaLinkListProps> = ({
	restaurantSocialMediaLinks,
}) => {
	const socialMediaComponents = [
		{ platform: "facebook", component: <Facebook /> },
		{ platform: "instagram", component: <Instagram /> },
		{ platform: "linkedin", component: <LinkedIn /> },
		{ platform: "x", component: <X /> },
		{ platform: "youtube", component: <YouTube /> },
		{ platform: "pinterest", component: <Pinterest /> },
	]

	return (
		<>
			<List
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{restaurantSocialMediaLinks.map((link) => {
					const socialMediaComponent = socialMediaComponents.find(
						(component) => component.platform === link.social_media_platform
					)
					return link.is_active ? (
						<ListItem key={link.social_media_platform}>
							<Link href={link.url} target="_blank" rel="noopener noreferrer">
								{socialMediaComponent?.component}
							</Link>
						</ListItem>
					) : null
				})}
			</List>
		</>
	)
}

export default SocialMediaLinkList
