import { SocialLink } from "./BizPageLayout"
import { Button } from "../../../components/ui/button"
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaXTwitter,
	FaYoutube,
	FaPinterest,
} from "react-icons/fa6"
import { motion } from "framer-motion"

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
			icon: FaFacebook,
			color: "hover:bg-blue-50 hover:border-blue-200",
		},
		{
			platform: "instagram",
			label: "Instagram",
			icon: FaInstagram,
			color: "hover:bg-pink-50 hover:border-pink-200",
		},
		{
			platform: "linkedin",
			label: "LinkedIn",
			icon: FaLinkedin,
			color: "hover:bg-blue-50 hover:border-blue-200",
		},
		{
			platform: "x",
			label: "X",
			icon: FaXTwitter,
			color: "hover:bg-gray-50 hover:border-gray-200",
		},
		{
			platform: "youtube",
			label: "YouTube",
			icon: FaYoutube,
			color: "hover:bg-red-50 hover:border-red-200",
		},
		{
			platform: "pinterest",
			label: "Pinterest",
			icon: FaPinterest,
			color: "hover:bg-red-50 hover:border-red-200",
		},
	]

	const activeSocialLinks = businessSocialMediaLinks.filter(
		(link) => link.is_active
	)

	if (activeSocialLinks.length === 0) {
		return null
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, delay: 0.1 }}
			className="w-full"
		>
			<div className="flex justify-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
				{activeSocialLinks.map((link, index) => {
					const socialMediaInfo = socialMediaComponents.find(
						(component) => component.platform === link.social_media_platform
					)

					if (!socialMediaInfo) return null

					const IconComponent = socialMediaInfo.icon

					return (
						<motion.div
							key={link.social_media_platform}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.2, delay: index * 0.1 }}
							className="flex-shrink-0"
						>
							<Button
								asChild
								variant="outline"
								size="lg"
								className={`h-12 w-12 bg-white/50 backdrop-blur-sm border-gray-200 transition-all duration-200 active:scale-95 ${socialMediaInfo.color}`}
							>
								<a
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-center w-full h-full"
								>
									<IconComponent className="w-5 h-5" />
								</a>
							</Button>
						</motion.div>
					)
				})}
			</div>
		</motion.div>
	)
}

export default SocialMediaLinkList
