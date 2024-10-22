import { Box, Divider, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const PublicHome = () => {
	const restaurantList = [
		{ name: "Foolproof", domain: "foolproofbrewery" },
		{ name: "Ocean Mist", domain: "oceanmistrestaurant" },
	]
	return (
		<Box sx={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
			<Typography variant="h2" sx={{ fontWeight: "bold" }}>
				OnlyBizLinks
			</Typography>
			<Divider sx={{ my: 2 }} />
			<Typography variant="body1">
				This is a customized application for restaurants and breweries launched
				from embedded NFC chips in beer flights and hand-crafted wood products
				exclusively built by James from RI Local Woodworks
			</Typography>
			<Divider sx={{ my: 2 }} />
			<Typography variant="body1">
				<a href="mailto:jc@rilocalwoodworks.com">
					Please contact me at jc@rilocalwoodworks.com for more information
				</a>
			</Typography>
			<Divider sx={{ my: 2 }} />
			<Typography variant="h6">Business Listings:</Typography>
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
