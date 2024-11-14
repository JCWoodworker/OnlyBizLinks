import { Dialog, DialogTitle, DialogContentText } from "@mui/material"

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
	return (
		<Dialog
			open={openDialog}
			onClose={() => setOpenDialog(false)}
			sx={{
				textAlign: "center",
				margin: "0 auto",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				"& .MuiDialog-paper": {
					margin: "0 auto",
					padding: "50px",
					paddingBottom: "60px",
					color: "white",
					backgroundColor: "black",
					borderRadius: "20px",
					"& .MuiDialogContentText-root": {
						color: "white",
					},
				},
			}}
		>
			<DialogTitle>{title}</DialogTitle>
			<DialogContentText>{content}</DialogContentText>
		</Dialog>
	)
}

export default CustomDialog
