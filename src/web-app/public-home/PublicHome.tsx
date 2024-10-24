import { Box, Divider, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const PublicHome = () => {
	const businessList = [
		{ name: "Foolproof", domain: "foolproofbrewery" },
		{ name: "Ocean Mist", domain: "oceanmistrestaurant" },
	]
	return (
		<Box sx={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 1,
				}}
			>
				<img
					src="https://myrestaurantlinks-images.s3.us-east-2.amazonaws.com/OnlyBizLinksLogo.svg"
					alt="OnlyBizLinks"
					style={{ width: "200px", height: "200px", borderRadius: "10px" }}
				/>
				<Typography variant="h3">OnlyBizLinks.com</Typography>
			</Box>

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
				{businessList.map((business) => (
					<Link key={business.domain} to={`/${business.domain}`}>
						{business.name}
					</Link>
				))}
			</Box>
		</Box>
	)
}

export default PublicHome
