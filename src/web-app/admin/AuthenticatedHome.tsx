import { Button } from "@mui/material"
import { useAuthStore } from "../../stores/AuthStore"

const AuthenticatedHome = () => {
	const { signOut, userBusinessData } = useAuthStore()
	console.log("userBusinessData: ", userBusinessData)

	return (
		<>
			<h4>Auth Home</h4>
			<Button onClick={signOut}>Sign Out</Button>
			{userBusinessData.map((business) => (
				<div key={business.id}>{business.name}</div>
			))}
		</>
	)
}

export default AuthenticatedHome
