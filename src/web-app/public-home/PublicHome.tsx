import { Box, Divider, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const PublicHome = () => {
	const restaurantList = [
		{ name: "Foolproof", domain: "foolproofbrewery" },
		{ name: "Ocean Mist", domain: "oceanmistrestaurant" },
	]
	return (
		<Box sx={{ textAlign: "center" }}>
			<Typography variant="h2">
				OnlyBizLinks.com
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
