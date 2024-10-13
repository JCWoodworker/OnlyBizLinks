import { Box } from "@mui/material"
import { useRestaurantStore } from "../../stores/RestaurantStore"
import SocialMediaLinkList from "./SocialMediaLinkList"

const SocialMediaLinkWrapper: React.FC = () => {
	const restaurantSocialMediaLinks = useRestaurantStore(
		(state) => state.restaurantSocialMediaLinks
	)

	return (
		<Box>
			<SocialMediaLinkList
				restaurantSocialMediaLinks={[...restaurantSocialMediaLinks]}
			/>
		</Box>
	)
}

export default SocialMediaLinkWrapper
