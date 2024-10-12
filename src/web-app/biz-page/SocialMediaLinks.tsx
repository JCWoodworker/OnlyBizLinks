import { Facebook, Instagram, LinkedIn, X } from "@mui/icons-material"
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
					<ListItemIcon
						key={socialMediaElement.name}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "space-around",
						}}
					>
						{socialMediaElement.icon}
						<Link href={socialMediaElement.url} target="_blank" />
					</ListItemIcon>
				))}
			</List>
		</Box>
	)
}

export default SocialMediaLinks
