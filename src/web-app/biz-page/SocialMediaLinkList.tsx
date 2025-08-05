import { SocialLink } from "./BizPageLayout"

interface SocialMediaLinkListProps {
	businessSocialMediaLinks: SocialLink[]
}

const SocialMediaLinkList: React.FC<SocialMediaLinkListProps> = ({
	businessSocialMediaLinks,
}) => {
	const socialMediaComponents = [
		{
			platform: "facebook",
			label: "Facebook",
			symbol: "📘",
		},
		{
			platform: "instagram",
			label: "Instagram",
			symbol: "📷",
		},
		{
			platform: "linkedin",
			label: "LinkedIn",
			symbol: "💼",
		},
		{
			platform: "x",
			label: "X",
			symbol: "🐦",
		},
		{
			platform: "youtube",
			label: "YouTube",
			symbol: "📺",
		},
		{
			platform: "pinterest",
			label: "Pinterest",
			symbol: "📌",
		},
	]

	const activeSocialLinks = businessSocialMediaLinks.filter(
		(link) => link.is_active
	)

	if (activeSocialLinks.length === 0) {
		return null
	}

	return (
		<div>
			{activeSocialLinks.map((link) => {
				const socialMediaInfo = socialMediaComponents.find(
					(component) => component.platform === link.social_media_platform
				)

				if (!socialMediaInfo) return null

				return (
					<a
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						key={link.social_media_platform}
					>
						<button>
							<span>{socialMediaInfo.symbol}</span>
							<span>{socialMediaInfo.label}</span>
						</button>
					</a>
				)
			})}
		</div>
	)
}

export default SocialMediaLinkList
