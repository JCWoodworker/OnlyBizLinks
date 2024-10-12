import { Facebook, Instagram, LinkedIn, X, YouTube } from "@mui/icons-material"
import Pinterest from "@mui/icons-material/Pinterest"
import { Box, Link, List, ListItemIcon } from "@mui/material"

const SocialMediaLinks: React.FC = () => {
	// This will eventually be fetched from the database
	const socialMediaIcons = [
		{ name: "Facebook", icon: <Facebook />, url: "https://www.facebook.com" },
		{
			name: "Instagram",
			icon: <Instagram />,
			url: "https://www.instagram.com",
		},
		{ name: "LinkedIn", icon: <LinkedIn />, url: "https://www.linkedin.com" },
		{ name: "X", icon: <X />, url: "https://www.x.com" },
		{ name: "Youtube", icon: <YouTube />, url: "https://www.youtube.com" },
		{
			name: "Pinterest",
			icon: <Pinterest />,
			url: "https://www.pinterest.com",
		}
	]
	return (
		<Box>
			<List
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "space-evenly",
				}}
			>
				{socialMediaIcons.map((socialMediaElement) => (
					<Link
						href={socialMediaElement.url}
						target="_blank"
						key={socialMediaElement.name}
					>
						<ListItemIcon
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "space-around",
							}}
						>
							{socialMediaElement.icon}
						</ListItemIcon>
					</Link>
				))}
			</List>
		</Box>
	)
}

export default SocialMediaLinks
