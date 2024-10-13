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
			}}
		>
			{restaurantLogo && (
				<img src={restaurantLogo} alt={`${restaurantName} logo`} />
			)}
			<Typography variant="h2">{restaurantName}</Typography>
			<SocialMediaLinkWrapper />
			<LinkList />
		</Box>
	)
}

export default BizPageLayout
