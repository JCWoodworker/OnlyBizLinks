import { Box, CircularProgress } from "@mui/material"

const Loading: React.FC = () => {
	return (
		<Box
			sx={{
				display: "flex",
				placeItems: "center",
				height: "100vh",
				textAlign: "center",
			}}
		>
			<CircularProgress />
		</Box>
	)
}

export default Loading
