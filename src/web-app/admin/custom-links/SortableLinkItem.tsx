import { useState } from "react"
import {
	Box,
	IconButton,
	Typography,
	Paper,
	Menu,
	MenuItem,
} from "@mui/material"
import {
	DragIndicator,
	MoreVert,
	Edit,
	Delete,
	OpenInNew,
} from "@mui/icons-material"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { CustomLink } from "../../../hooks/useBusinessData"

type SortableLinkItemProps = {
	link: CustomLink
	onEdit: (link: CustomLink) => void
	onDelete: (linkId: number) => void
}

const SortableLinkItem = ({
	link,
	onEdit,
	onDelete,
}: SortableLinkItemProps) => {
	const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null)

	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({ id: link.id })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		opacity: isDragging ? 0.5 : 1,
	}

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

	return (
		<Paper
			ref={setNodeRef}
			style={style}
			sx={{
				p: 2,
				mb: 1,
				display: "flex",
				alignItems: "center",
				gap: 2,
				cursor: isDragging ? "grabbing" : "default",
				"&:hover": {
					boxShadow: 2,
				},
			}}
		>
			<IconButton
				{...attributes}
				{...listeners}
				sx={{ cursor: "grab", color: "text.secondary" }}
			>
				<DragIndicator />
			</IconButton>

			<Box sx={{ flex: 1, minWidth: 0 }}>
				<Typography variant="subtitle1" noWrap>
					{link.title}
				</Typography>
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

export default SortableLinkItem
