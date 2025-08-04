import { useState } from "react"
import { Box, Typography, Button, Alert, CircularProgress } from "@mui/material"
import { Add } from "@mui/icons-material"

import EditBoxLayout from "../EditBoxLayout"
import { useAuthStore } from "../../../stores/AuthStore"
import { useBusinessData } from "../../../hooks/useBusinessData"
import {
	useCreateSocialLink,
	useUpdateSocialLink,
	useDeleteSocialLink,
} from "../../../hooks/useSocialLinks"
import { SocialLink } from "../../../hooks/useBusinessData"
import SocialLinkForm from "./SocialLinkForm"
import SocialLinkItem from "./SocialLinkItem"

const SocialLinksAdminContainer = () => {
	const { userBusinessData } = useAuthStore()
	const businessId = userBusinessData?.[0]?.id

	const { data: businessData, isLoading, error } = useBusinessData(businessId)
	const createSocialLinkMutation = useCreateSocialLink(businessId!)
	const updateSocialLinkMutation = useUpdateSocialLink(businessId!)
	const deleteSocialLinkMutation = useDeleteSocialLink(businessId!)

	const [isFormOpen, setIsFormOpen] = useState(false)
	const [editingLink, setEditingLink] = useState<SocialLink | null>(null)

	const socialLinks = businessData?.socialLinks || []

	const handleAddLink = () => {
		setEditingLink(null)
		setIsFormOpen(true)
	}

	const handleEditLink = (link: SocialLink) => {
		setEditingLink(link)
		setIsFormOpen(true)
	}

	const handleSaveLink = async (linkData: {
		social_media_platform: string
		url: string
		isActive: boolean
	}) => {
		try {
			if (editingLink) {
				await updateSocialLinkMutation.mutateAsync({
					linkId: editingLink.id,
					linkData,
				})
			} else {
				await createSocialLinkMutation.mutateAsync(linkData)
			}
			setIsFormOpen(false)
			setEditingLink(null)
		} catch (error) {
			console.error("Failed to save social link:", error)
		}
	}

	const handleDeleteLink = async (linkId: number) => {
		if (window.confirm("Are you sure you want to delete this social link?")) {
			try {
				await deleteSocialLinkMutation.mutateAsync(linkId)
			} catch (error) {
				console.error("Failed to delete social link:", error)
			}
		}
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

	if (error) {
		return (
			<EditBoxLayout>
				<Alert severity="error">
					Failed to load social links. Please try again.
				</Alert>
			</EditBoxLayout>
		)
	}

	const existingPlatforms = socialLinks.map(
		(link) => link.social_media_platform
	)

	return (
		<EditBoxLayout>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					mb: 2,
				}}
			>
				<Typography variant="h6">Social Media Links</Typography>
				<Button
					variant="contained"
					startIcon={<Add />}
					onClick={handleAddLink}
					size="small"
				>
					Add Social Link
				</Button>
			</Box>

			{socialLinks.length === 0 ? (
				<Box sx={{ textAlign: "center", py: 4 }}>
					<Typography variant="body2" color="text.secondary">
						No social media links yet. Add your first social link to get
						started!
					</Typography>
				</Box>
			) : (
				<Box>
					{socialLinks.map((link) => (
						<SocialLinkItem
							key={link.id}
							link={link}
							onEdit={handleEditLink}
							onDelete={handleDeleteLink}
						/>
					))}
				</Box>
			)}

			<SocialLinkForm
				open={isFormOpen}
				onClose={() => {
					setIsFormOpen(false)
					setEditingLink(null)
				}}
				onSave={handleSaveLink}
				initialData={editingLink || undefined}
				title={editingLink ? "Edit Social Link" : "Add New Social Link"}
				loading={
					createSocialLinkMutation.isPending ||
					updateSocialLinkMutation.isPending
				}
				existingPlatforms={existingPlatforms}
			/>
		</EditBoxLayout>
	)
}

export default SocialLinksAdminContainer
