import { Box } from "@mui/material"
import { useBusinessStore } from "../../stores/BusinessStore"
import SocialMediaLinkList from "./SocialMediaLinkList"

const SocialMediaLinkWrapper: React.FC = () => {
	const businessSocialMediaLinks = useBusinessStore(
		(state) => state.businessSocialMediaLinks
	)

	return (
		<Box>
			<SocialMediaLinkList
				businessSocialMediaLinks={[...businessSocialMediaLinks]}
			/>
		</Box>
	)
}

export default SocialMediaLinkWrapper
