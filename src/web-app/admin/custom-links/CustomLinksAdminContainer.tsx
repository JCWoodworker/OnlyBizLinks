import EditBoxLayout from "../EditBoxLayout"
import { useAuthStore } from "../../../stores/AuthStore"

const CustomLinksAdminContainer = () => {
	const { userBusinessData } = useAuthStore()
  console.log(userBusinessData)
	return (
		<EditBoxLayout>
			<div>Custom Links Editor</div>
		</EditBoxLayout>
	)
}

export default CustomLinksAdminContainer
