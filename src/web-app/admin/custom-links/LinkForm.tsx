import { useState } from "react"
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	TextField,
	Button,
	Box,
} from "@mui/material"
import { CustomLink } from "../../../hooks/useBusinessData"

type LinkFormProps = {
	open: boolean
	onClose: () => void
	onSave: (linkData: { title: string; url: string }) => void
	initialData?: Partial<CustomLink>
	title: string
	loading?: boolean
}

const LinkForm = ({
	open,
	onClose,
	onSave,
	initialData,
	title,
	loading = false,
}: LinkFormProps) => {
	const [formData, setFormData] = useState({
		title: initialData?.title || "",
		url: initialData?.url || "",
	})

	const [errors, setErrors] = useState({
		title: "",
		url: "",
	})

	const validateForm = () => {
		const newErrors = {
			title: "",
			url: "",
		}

		if (!formData.title.trim()) {
			newErrors.title = "Title is required"
		}

		if (!formData.url.trim()) {
			newErrors.url = "URL is required"
		} else if (!isValidUrl(formData.url)) {
			newErrors.url = "Please enter a valid URL"
		}

		setErrors(newErrors)
		return !newErrors.title && !newErrors.url
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
				title: formData.title.trim(),
				url: urlWithProtocol,
			})
		}
	}

	const handleClose = () => {
		setFormData({ title: "", url: "" })
		setErrors({ title: "", url: "" })
		onClose()
	}

	return (
		<Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
					<TextField
						label="Link Title"
						value={formData.title}
						onChange={(e) =>
							setFormData({ ...formData, title: e.target.value })
						}
						error={!!errors.title}
						helperText={errors.title}
						fullWidth
						placeholder="e.g., My Website"
					/>
					<TextField
						label="URL"
						value={formData.url}
						onChange={(e) => setFormData({ ...formData, url: e.target.value })}
						error={!!errors.url}
						helperText={errors.url}
						fullWidth
						placeholder="e.g., www.example.com"
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

export default LinkForm
