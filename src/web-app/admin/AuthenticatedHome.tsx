import { Box, Button } from "@mui/material"
import { useAuthStore } from "../../stores/AuthStore"
import CustomLinksAdminContainer from "./custom-links/CustomLinksAdminContainer"
import SocialLinksAdminContainer from "./social-links/SocialLinksAdminContainer"
import ChangeLogoContainer from "./ChangeLogoContainer"

const AuthenticatedHome = () => {
	const { refreshAuthData, signOut, userBusinessData } = useAuthStore()
	console.log("userBusinessData: ", userBusinessData)
	let displayScreen = null
	if (userBusinessData.length > 1) {
		displayScreen = (
			<Box
				sx={{
					padding: 2,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: 2,
					border: "1px solid black",
					borderRadius: 2,
				}}
			>
				{userBusinessData.map((business) => (
					<div key={business.id}>{business.name}</div>
				))}
			</Box>
		)
	} else if (userBusinessData.length === 1) {
		displayScreen = (
			<>
				<h3>{userBusinessData[0].name}</h3>
				<ChangeLogoContainer />
				<CustomLinksAdminContainer />
				<SocialLinksAdminContainer />
			</>
		)
	}

	return (
		<>
			<Box
				sx={{
					position: "fixed",
					bottom: 0,
					left: 0,
					right: 0,
					padding: 2,
					display: "flex",
					flexDirection: "column",
					gap: 2,
					backgroundColor: "white",
				}}
			>
				<Button onClick={signOut}>Sign Out</Button>
				<Button onClick={refreshAuthData}>Refresh Auth Data</Button>
			</Box>
			{displayScreen}
		</>
	)
}

export default AuthenticatedHome
