import { Box, Divider, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const PublicHome = () => {
	const restaurantList = [
		{ name: "Foolproof", domain: "foolproofbrewery" },
		{ name: "Ocean Mist", domain: "oceanmistrestaurant" },
	]
	return (
		<Box sx={{ textAlign: "center" }}>
			<Typography variant="h2">OnlyBizLinks</Typography>
			<Divider sx={{ my: 2 }} />
			<Typography variant="body1">
				OnlyBizLinks is a service that allows you to create a list custom links
				for your business.
			</Typography>
			<Divider sx={{ my: 2 }} />
			<Typography variant="body1">Current Subscribers:</Typography>
			<Box sx={{ m: 1, display: "flex", flexDirection: "column", gap: 1 }}>
				{restaurantList.map((restaurant) => (
					<Link key={restaurant.domain} to={`/${restaurant.domain}`}>
						{restaurant.name}
					</Link>
				))}
			</Box>
		</Box>
	)
}

export default PublicHome
