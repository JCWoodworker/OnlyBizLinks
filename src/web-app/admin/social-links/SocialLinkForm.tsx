import { useState } from "react"
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	TextField,
	Button,
	Box,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	FormControlLabel,
	Switch,
} from "@mui/material"
import { SocialLink } from "../../../hooks/useBusinessData"

const SOCIAL_PLATFORMS = [
	{ value: "facebook", label: "Facebook" },
	{ value: "instagram", label: "Instagram" },
	{ value: "x", label: "X (Twitter)" },
	{ value: "linkedin", label: "LinkedIn" },
	{ value: "youtube", label: "YouTube" },
	{ value: "pinterest", label: "Pinterest" },
	{ value: "tiktok", label: "TikTok" },
	{ value: "snapchat", label: "Snapchat" },
	{ value: "discord", label: "Discord" },
	{ value: "twitch", label: "Twitch" },
]

type SocialLinkFormProps = {
	open: boolean
	onClose: () => void
	onSave: (linkData: {
		social_media_platform: string
		url: string
		isActive: boolean
	}) => void
	initialData?: Partial<SocialLink>
	title: string
	loading?: boolean
	existingPlatforms?: string[]
}

const SocialLinkForm = ({
	open,
	onClose,
	onSave,
	initialData,
	title,
	loading = false,
	existingPlatforms = [],
}: SocialLinkFormProps) => {
	const [formData, setFormData] = useState({
		social_media_platform: initialData?.social_media_platform || "",
		url: initialData?.url || "",
		isActive: initialData?.isActive !== undefined ? initialData.isActive : true,
	})

	const [errors, setErrors] = useState({
		social_media_platform: "",
		url: "",
	})

	const validateForm = () => {
		const newErrors = {
			social_media_platform: "",
			url: "",
		}

		if (!formData.social_media_platform) {
			newErrors.social_media_platform = "Please select a platform"
		}

		if (!formData.url.trim()) {
			newErrors.url = "URL is required"
		} else if (!isValidUrl(formData.url)) {
			newErrors.url = "Please enter a valid URL"
		}

		setErrors(newErrors)
		return !newErrors.social_media_platform && !newErrors.url
	}

	const isValidUrl = (url: string) => {
		try {
			new URL(url.startsWith("http") ? url : `https://${url}`)
			return true
		} catch {
			return false
		}
	}

	const handleSave = () => {
		if (validateForm()) {
			// Ensure URL has protocol
			const urlWithProtocol = formData.url.startsWith("http")
				? formData.url
				: `https://${formData.url}`

			onSave({
				social_media_platform: formData.social_media_platform,
				url: urlWithProtocol,
				isActive: formData.isActive,
			})
		}
	}

	const handleClose = () => {
		setFormData({
			social_media_platform: "",
			url: "",
			isActive: true,
		})
		setErrors({ social_media_platform: "", url: "" })
		onClose()
	}

	const availablePlatforms = SOCIAL_PLATFORMS.filter(
		(platform) =>
			!existingPlatforms.includes(platform.value) ||
			platform.value === initialData?.social_media_platform
	)

	return (
		<Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
					<FormControl fullWidth error={!!errors.social_media_platform}>
						<InputLabel>Social Media Platform</InputLabel>
						<Select
							value={formData.social_media_platform}
							label="Social Media Platform"
							onChange={(e) =>
								setFormData({
									...formData,
									social_media_platform: e.target.value,
								})
							}
						>
							{availablePlatforms.map((platform) => (
								<MenuItem key={platform.value} value={platform.value}>
									{platform.label}
								</MenuItem>
							))}
						</Select>
						{errors.social_media_platform && (
							<Box sx={{ color: "error.main", fontSize: "0.75rem", mt: 0.5 }}>
								{errors.social_media_platform}
							</Box>
						)}
					</FormControl>

					<TextField
						label="Profile/Page URL"
						value={formData.url}
						onChange={(e) => setFormData({ ...formData, url: e.target.value })}
						error={!!errors.url}
						helperText={errors.url || "e.g., https://www.facebook.com/yourpage"}
						fullWidth
						placeholder="Enter your profile or page URL"
					/>

					<FormControlLabel
						control={
							<Switch
								checked={formData.isActive}
								onChange={(e) =>
									setFormData({ ...formData, isActive: e.target.checked })
								}
							/>
						}
						label="Active (visible on your page)"
					/>
				</Box>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} disabled={loading}>
					Cancel
				</Button>
				<Button onClick={handleSave} variant="contained" disabled={loading}>
					{loading ? "Saving..." : "Save"}
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default SocialLinkForm
