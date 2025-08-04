import { useState } from "react"
import {
	Box,
	IconButton,
	Typography,
	Paper,
	Menu,
	MenuItem,
	Chip,
	Avatar,
} from "@mui/material"
import {
	MoreVert,
	Edit,
	Delete,
	OpenInNew,
	Facebook,
	Instagram,
	X as XIcon,
	LinkedIn,
	YouTube,
	Pinterest,
} from "@mui/icons-material"
import { SocialLink } from "../../../hooks/useBusinessData"

const getPlatformIcon = (platform: string) => {
	switch (platform.toLowerCase()) {
		case "facebook":
			return <Facebook />
		case "instagram":
			return <Instagram />
		case "x":
		case "twitter":
			return <XIcon />
		case "linkedin":
			return <LinkedIn />
		case "youtube":
			return <YouTube />
		case "pinterest":
			return <Pinterest />
		default:
			return (
				<div
					style={{
						width: 24,
						height: 24,
						backgroundColor: "#ccc",
						borderRadius: "50%",
					}}
				/>
			)
	}
}

const getPlatformColor = (platform: string) => {
	switch (platform.toLowerCase()) {
		case "facebook":
			return "#1877F2"
		case "instagram":
			return "#E4405F"
		case "x":
		case "twitter":
			return "#000000"
		case "linkedin":
			return "#0A66C2"
		case "youtube":
			return "#FF0000"
		case "pinterest":
			return "#BD081C"
		default:
			return "#757575"
	}
}

type SocialLinkItemProps = {
	link: SocialLink
	onEdit: (link: SocialLink) => void
	onDelete: (linkId: number) => void
}

const SocialLinkItem = ({ link, onEdit, onDelete }: SocialLinkItemProps) => {
	const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null)

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMenuAnchor(event.currentTarget)
	}

	const handleMenuClose = () => {
		setMenuAnchor(null)
	}

	const handleEdit = () => {
		onEdit(link)
		handleMenuClose()
	}

	const handleDelete = () => {
		onDelete(link.id)
		handleMenuClose()
	}

	const handleOpenLink = () => {
		window.open(link.url, "_blank")
		handleMenuClose()
	}

	const platformColor = getPlatformColor(link.social_media_platform)

	return (
		<Paper
			sx={{
				p: 2,
				mb: 1,
				display: "flex",
				alignItems: "center",
				gap: 2,
				opacity: link.isActive ? 1 : 0.6,
				"&:hover": {
					boxShadow: 2,
				},
			}}
		>
			<Avatar sx={{ bgcolor: platformColor, width: 40, height: 40 }}>
				{getPlatformIcon(link.social_media_platform)}
			</Avatar>

			<Box sx={{ flex: 1, minWidth: 0 }}>
				<Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
					<Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
						{link.social_media_platform}
					</Typography>
					<Chip
						label={link.isActive ? "Active" : "Inactive"}
						size="small"
						color={link.isActive ? "success" : "default"}
						variant="outlined"
					/>
				</Box>
				<Typography variant="body2" color="text.secondary" noWrap>
					{link.url}
				</Typography>
			</Box>

			<IconButton onClick={handleMenuOpen}>
				<MoreVert />
			</IconButton>

			<Menu
				anchorEl={menuAnchor}
				open={Boolean(menuAnchor)}
				onClose={handleMenuClose}
			>
				<MenuItem onClick={handleOpenLink}>
					<OpenInNew sx={{ mr: 1 }} />
					Open Link
				</MenuItem>
				<MenuItem onClick={handleEdit}>
					<Edit sx={{ mr: 1 }} />
					Edit
				</MenuItem>
				<MenuItem onClick={handleDelete} sx={{ color: "error.main" }}>
					<Delete sx={{ mr: 1 }} />
					Delete
				</MenuItem>
			</Menu>
		</Paper>
	)
}

export default SocialLinkItem
