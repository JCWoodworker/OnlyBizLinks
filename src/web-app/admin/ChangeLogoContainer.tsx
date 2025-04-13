import { useAuthStore } from "../../stores/AuthStore"
import EditBoxLayout from "./EditBoxLayout"

const ChangeLogoContainer = () => {
	const { userBusinessData } = useAuthStore()
	return (
		<EditBoxLayout>
			<img
				src={userBusinessData[0].logo}
				alt="logo"
				style={{ width: "150px", height: "auto" }}
			/>
			<p>Change Logo</p>
		</EditBoxLayout>
	)
}

export default ChangeLogoContainer
