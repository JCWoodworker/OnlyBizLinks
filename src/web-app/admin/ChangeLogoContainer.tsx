import React, { useState, useRef } from "react"
import {
	Box,
	Typography,
	Button,
	Avatar,
	Alert,
	CircularProgress,
	Paper,
} from "@mui/material"
import { PhotoCamera, Delete } from "@mui/icons-material"
import { useAuthStore } from "../../stores/AuthStore"
import { useBusinessData } from "../../hooks/useBusinessData"
import { useUploadLogo } from "../../hooks/useLogo"
import EditBoxLayout from "./EditBoxLayout"

const ChangeLogoContainer = () => {
	const { userBusinessData } = useAuthStore()
	const businessId = userBusinessData?.[0]?.id

	const { data: businessData, isLoading } = useBusinessData(businessId)
	const uploadLogoMutation = useUploadLogo(businessId!)

	const [previewUrl, setPreviewUrl] = useState<string | null>(null)
	const [error, setError] = useState<string>("")
	const fileInputRef = useRef<HTMLInputElement>(null)

	const currentLogo = businessData?.logo || userBusinessData?.[0]?.logo

	const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (!file) return

		// Validate file type
		if (!file.type.startsWith("image/")) {
			setError("Please select an image file")
			return
		}

		// Validate file size (max 5MB)
		if (file.size > 5 * 1024 * 1024) {
			setError("File size must be less than 5MB")
			return
		}

		setError("")

		// Create preview
		const reader = new FileReader()
		reader.onload = (e) => {
			setPreviewUrl(e.target?.result as string)
		}
		reader.readAsDataURL(file)
	}

	const handleUpload = async () => {
		const file = fileInputRef.current?.files?.[0]
		if (!file) return

		try {
			await uploadLogoMutation.mutateAsync(file)
			setPreviewUrl(null)
			if (fileInputRef.current) {
				fileInputRef.current.value = ""
			}
		} catch {
			setError("Failed to upload logo. Please try again.")
		}
	}

	const handleCancel = () => {
		setPreviewUrl(null)
		setError("")
		if (fileInputRef.current) {
			fileInputRef.current.value = ""
		}
	}

	const triggerFileInput = () => {
		fileInputRef.current?.click()
	}

	if (isLoading) {
		return (
			<EditBoxLayout>
				<Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
					<CircularProgress />
				</Box>
			</EditBoxLayout>
		)
	}

	return (
		<EditBoxLayout>
			<Typography variant="h6" sx={{ mb: 2 }}>
				Business Logo
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 2,
				}}
			>
				{/* Current/Preview Logo */}
				<Paper
					elevation={1}
					sx={{
						p: 2,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 2,
					}}
				>
					<Avatar
						src={previewUrl || currentLogo}
						sx={{
							width: 120,
							height: 120,
							bgcolor: "grey.200",
							fontSize: "2rem",
						}}
					>
						{!previewUrl && !currentLogo && "LOGO"}
					</Avatar>

					{previewUrl && (
						<Typography variant="body2" color="text.secondary">
							Preview
						</Typography>
					)}
				</Paper>

				{/* Error Display */}
				{error && (
					<Alert severity="error" sx={{ width: "100%" }}>
						{error}
					</Alert>
				)}

				{/* File Input (Hidden) */}
				<input
					ref={fileInputRef}
					type="file"
					accept="image/*"
					style={{ display: "none" }}
					onChange={handleFileSelect}
				/>

				{/* Action Buttons */}
				{!previewUrl ? (
					<Button
						variant="contained"
						startIcon={<PhotoCamera />}
						onClick={triggerFileInput}
						size="large"
					>
						{currentLogo ? "Change Logo" : "Upload Logo"}
					</Button>
				) : (
					<Box sx={{ display: "flex", gap: 1 }}>
						<Button
							variant="outlined"
							onClick={handleCancel}
							disabled={uploadLogoMutation.isPending}
						>
							Cancel
						</Button>
						<Button
							variant="contained"
							onClick={handleUpload}
							disabled={uploadLogoMutation.isPending}
							startIcon={
								uploadLogoMutation.isPending ? (
									<CircularProgress size={20} />
								) : (
									<PhotoCamera />
								)
							}
						>
							{uploadLogoMutation.isPending ? "Uploading..." : "Upload"}
						</Button>
					</Box>
				)}

				{/* Current Logo Actions */}
				{currentLogo && !previewUrl && (
					<Button
						variant="text"
						color="error"
						startIcon={<Delete />}
						size="small"
						onClick={() => {
							// For now, just show alert. Could implement delete endpoint later
							alert("Logo deletion not yet implemented")
						}}
					>
						Remove Current Logo
					</Button>
				)}
			</Box>

			<Box sx={{ mt: 2, p: 2, bgcolor: "grey.50", borderRadius: 1 }}>
				<Typography variant="body2" color="text.secondary">
					<strong>Tips:</strong>
					<br />
					• Upload a square image for best results
					<br />
					• Recommended size: 300x300 pixels or larger
					<br />
					• Supported formats: JPG, PNG, SVG
					<br />• Maximum file size: 5MB
				</Typography>
			</Box>
		</EditBoxLayout>
	)
}

export default ChangeLogoContainer
