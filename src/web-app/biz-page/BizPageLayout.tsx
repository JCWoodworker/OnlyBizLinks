import { Box } from "@mui/material"
import SocialMediaLinks from "./SocialMediaLinks"
import LinkList from "./LinkList"
import { useRestaurantStore } from "../../stores/RestaurantStore"

const BizPageLayout: React.FC = () => {
	const restaurantName = useRestaurantStore((state) => state.restaurantName)
	// const restaurantLogo: URL | null = useRestaurantStore(
	// 	(state) => state.restaurantLogo
	// )

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{/* {restaurantLogo ? (
				<img src={restaurantLogo as unknown as string} />
			) : <></>} */}
			<h1>{restaurantName}</h1>
			<SocialMediaLinks />
			<LinkList />
		</Box>
	)
}

export default BizPageLayout
