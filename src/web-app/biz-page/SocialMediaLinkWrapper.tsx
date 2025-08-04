import { useBusinessStore } from "../../stores/BusinessStore"
import SocialMediaLinkList from "./SocialMediaLinkList"

const SocialMediaLinkWrapper: React.FC = () => {
	const businessSocialMediaLinks = useBusinessStore(
		(state) => state.businessSocialMediaLinks
	)

	return (
		<SocialMediaLinkList
			businessSocialMediaLinks={[...businessSocialMediaLinks]}
		/>
	)
}

export default SocialMediaLinkWrapper
