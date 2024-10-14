import { Box, Typography } from "@mui/material"
import SocialMediaLinkWrapper from "./SocialMediaLinkWrapper"
import LinkList from "./LinkList"
import { useRestaurantStore } from "../../stores/RestaurantStore"

const BizPageLayout: React.FC = () => {
	const restaurantName = useRestaurantStore((state) => state.restaurantName)
	const restaurantLogo: string | null = useRestaurantStore(
		(state) => state.restaurantLogo
	)

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
			}}
		>
			{restaurantLogo && (
				<Box
					component="img"
					src={restaurantLogo}
					alt={`${restaurantName} logo`}
					sx={{
						width: "auto",
						height: "200px",
						borderRadius: "10px",
						marginTop: "1rem",
						marginBottom: "2rem",
					}}
				/>
			)}
			<Typography variant="h3">{restaurantName}</Typography>
			<SocialMediaLinkWrapper />
			<LinkList />
		</Box>
	)
}

export default BizPageLayout
