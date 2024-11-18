import { Button } from "@mui/material"
import { useAuthStore } from "../../stores/AuthStore"

const AuthenticatedHome = () => {
	const { refreshAuthData, signOut } = useAuthStore()

	return (
		<>
			<h4>Auth Home</h4>
			<Button onClick={refreshAuthData}>Refresh Tokens</Button>
			<Button onClick={signOut}>Sign Out</Button>
		</>
	)
}

export default AuthenticatedHome
