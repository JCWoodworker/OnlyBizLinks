import EditBoxLayout from "../EditBoxLayout"
import { useAuthStore } from "../../../stores/AuthStore"
import { Typography } from "@mui/material"

const CustomLinksAdminContainer = () => {
	const { userBusinessData } = useAuthStore()
	console.log(userBusinessData)
	return (
		<EditBoxLayout>
			<Typography variant="body1">Custom Links Editor</Typography>
		</EditBoxLayout>
	)
}

export default CustomLinksAdminContainer
