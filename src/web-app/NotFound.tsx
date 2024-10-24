import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

const NotFound = () => {
	return (
		<>
			<Typography variant="h3">404 - Business Not found</Typography>
			<Link to="/">Home</Link>
		</>
	)
}

export default NotFound
