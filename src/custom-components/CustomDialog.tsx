const CustomDialog = ({
	openDialog,
	setOpenDialog,
	title,
	content,
}: {
	openDialog: boolean
	setOpenDialog: (open: boolean) => void
	title: string
	content: string
}) => {
	if (!openDialog) return null

	return (
		<div onClick={() => setOpenDialog(false)}>
			<div onClick={(e) => e.stopPropagation()}>
				<h2>{title}</h2>
				<p>{content}</p>
				<button onClick={() => setOpenDialog(false)}>Close</button>
			</div>
		</div>
	)
}

export default CustomDialog
