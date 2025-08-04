import React, { useState } from "react"
import { Box, Typography, Button, Alert, CircularProgress } from "@mui/material"
import { Add } from "@mui/icons-material"
import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
	DragEndEvent,
} from "@dnd-kit/core"
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable"

import EditBoxLayout from "../EditBoxLayout"
import { useAuthStore } from "../../../stores/AuthStore"
import { useBusinessData } from "../../../hooks/useBusinessData"
import {
	useCreateCustomLink,
	useUpdateCustomLink,
	useDeleteCustomLink,
	useReorderCustomLinks,
} from "../../../hooks/useCustomLinks"
import { CustomLink } from "../../../hooks/useBusinessData"
import LinkForm from "./LinkForm"
import SortableLinkItem from "./SortableLinkItem"

const CustomLinksAdminContainer = () => {
	const { userBusinessData } = useAuthStore()
	const businessId = userBusinessData?.[0]?.id

	const { data: businessData, isLoading, error } = useBusinessData(businessId)
	const createLinkMutation = useCreateCustomLink(businessId!)
	const updateLinkMutation = useUpdateCustomLink(businessId!)
	const deleteLinkMutation = useDeleteCustomLink(businessId!)
	const reorderLinksMutation = useReorderCustomLinks(businessId!)

	const [isFormOpen, setIsFormOpen] = useState(false)
	const [editingLink, setEditingLink] = useState<CustomLink | null>(null)
	const [customLinks, setCustomLinks] = useState<CustomLink[]>([])

	// Update local state when business data changes
	React.useEffect(() => {
		if (businessData?.customLinks) {
			setCustomLinks(
				[...businessData.customLinks].sort(
					(a, b) => (a.order || 0) - (b.order || 0)
				)
			)
		}
	}, [businessData])

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	)

	const handleAddLink = () => {
		setEditingLink(null)
		setIsFormOpen(true)
	}

	const handleEditLink = (link: CustomLink) => {
		setEditingLink(link)
		setIsFormOpen(true)
	}

	const handleSaveLink = async (linkData: { title: string; url: string }) => {
		try {
			if (editingLink) {
				await updateLinkMutation.mutateAsync({
					linkId: editingLink.id,
					linkData,
				})
			} else {
				await createLinkMutation.mutateAsync({
					...linkData,
					order: customLinks.length,
				})
			}
			setIsFormOpen(false)
			setEditingLink(null)
		} catch (error) {
			console.error("Failed to save link:", error)
		}
	}

	const handleDeleteLink = async (linkId: number) => {
		if (window.confirm("Are you sure you want to delete this link?")) {
			try {
				await deleteLinkMutation.mutateAsync(linkId)
			} catch (error) {
				console.error("Failed to delete link:", error)
			}
		}
	}

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event

		if (over && active.id !== over.id) {
			const oldIndex = customLinks.findIndex((link) => link.id === active.id)
			const newIndex = customLinks.findIndex((link) => link.id === over.id)

			const newLinks = arrayMove(customLinks, oldIndex, newIndex)
			setCustomLinks(newLinks)

			// Update order in backend
			const linkOrders = newLinks.map((link, index) => ({
				id: link.id,
				order: index,
			}))

			reorderLinksMutation.mutate(linkOrders)
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
					Failed to load custom links. Please try again.
				</Alert>
			</EditBoxLayout>
		)
	}

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
				<Typography variant="h6">Custom Links</Typography>
				<Button
					variant="contained"
					startIcon={<Add />}
					onClick={handleAddLink}
					size="small"
				>
					Add Link
				</Button>
			</Box>

			{customLinks.length === 0 ? (
				<Box sx={{ textAlign: "center", py: 4 }}>
					<Typography variant="body2" color="text.secondary">
						No custom links yet. Add your first link to get started!
					</Typography>
				</Box>
			) : (
				<DndContext
					sensors={sensors}
					collisionDetection={closestCenter}
					onDragEnd={handleDragEnd}
				>
					<SortableContext
						items={customLinks.map((link) => link.id)}
						strategy={verticalListSortingStrategy}
					>
						{customLinks.map((link) => (
							<SortableLinkItem
								key={link.id}
								link={link}
								onEdit={handleEditLink}
								onDelete={handleDeleteLink}
							/>
						))}
					</SortableContext>
				</DndContext>
			)}

			<LinkForm
				open={isFormOpen}
				onClose={() => {
					setIsFormOpen(false)
					setEditingLink(null)
				}}
				onSave={handleSaveLink}
				initialData={editingLink || undefined}
				title={editingLink ? "Edit Link" : "Add New Link"}
				loading={createLinkMutation.isPending || updateLinkMutation.isPending}
			/>
		</EditBoxLayout>
	)
}

export default CustomLinksAdminContainer
