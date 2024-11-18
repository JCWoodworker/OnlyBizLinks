import { Box, Divider, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const PublicHome = () => {
	const businessList = [
		{ name: "Foolproof", domain: "foolproofbrewery" },
		{ name: "Ocean Mist", domain: "oceanmistrestaurant" },
		{ name: "James Corey - Realtor", domain: "jamescoreyrealtor" },
	]
	return (
		<Box
			sx={{
				textAlign: "center",
				margin: "2rem auto",
				maxWidth: { xs: "100%", sm: "600px" },
			}}
		>
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
				<Typography variant="h3" sx={{ fontFamily: "'Titillium Web', 'Dosis', sans-serif", fontWeight: 700 }}>
					OnlyBizLinks
				</Typography>
			</Box>

			<Divider sx={{ my: 2 }} />
			<Typography variant="body1">
				This is a customized application for restaurants and breweries launched
				from embedded NFC chips in beer flights and hand-crafted wood products
				exclusively built by James from RI Local Woodworks
			</Typography>
			<Divider sx={{ my: 2 }} />
			<Typography variant="h6">Business Listings:</Typography>
			<Box
				sx={{
					m: 1,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 2,
				}}
			>
				{businessList.map((business) => (
					<Link key={business.domain} to={`/${business.domain}`}>
						<Typography
							variant="body1"
							sx={{
								backgroundColor: "#e3f2fd",
								width: "300px",
								transition: "all 0.3s ease",
								padding: "1rem",
								borderRadius: "10px",
								boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
								"&:hover": {
									backgroundColor: "#f5f5f5",
								},
							}}
						>
							{business.name}
						</Typography>
					</Link>
				))}
			</Box>
			<Divider sx={{ my: 2 }} />
			<Typography
				variant="body1"
				sx={{
					padding: "1rem",
					backgroundColor: "#e8f5e9",
					borderRadius: "10px",
				}}
			>
				<a href="mailto:jc@rilocalwoodworks.com">
					Please contact me at jc@rilocalwoodworks.com for more information
				</a>
			</Typography>
		</Box>
	)
}

export default PublicHome
