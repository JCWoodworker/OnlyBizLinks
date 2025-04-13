import { Box } from "@mui/material"

const EditBoxLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box
			sx={{
				margin: "10px",
				padding: "10px",
				width: { xs: "93%", md: "50%" },
				minHeight: "75px",
				height: "auto",

				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: 2,
				border: "1px solid #e0e0e0",
			}}
		>
			{children}
		</Box>
	)
}

export default EditBoxLayout
