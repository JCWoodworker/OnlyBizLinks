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
			color:
				"text-blue-600 hover:bg-blue-100 hover:border-blue-400 hover:text-blue-800 hover:shadow-lg hover:shadow-blue-400/40",
		},
		{
			platform: "instagram",
			label: "Instagram",
			icon: FaInstagram,
			color:
				"text-pink-600 hover:bg-gradient-to-br hover:from-pink-100 hover:to-purple-100 hover:border-pink-400 hover:text-pink-800 hover:shadow-lg hover:shadow-pink-400/40",
		},
		{
			platform: "linkedin",
			label: "LinkedIn",
			icon: FaLinkedin,
			color:
				"text-blue-700 hover:bg-blue-100 hover:border-blue-400 hover:text-blue-900 hover:shadow-lg hover:shadow-blue-400/40",
		},
		{
			platform: "x",
			label: "X",
			icon: FaXTwitter,
			color:
				"text-gray-800 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900 hover:shadow-lg hover:shadow-gray-400/40",
		},
		{
			platform: "youtube",
			label: "YouTube",
			icon: FaYoutube,
			color:
				"text-red-600 hover:bg-red-100 hover:border-red-400 hover:text-red-800 hover:shadow-lg hover:shadow-red-400/40",
		},
		{
			platform: "pinterest",
			label: "Pinterest",
			icon: FaPinterest,
			color:
				"text-red-600 hover:bg-red-100 hover:border-red-400 hover:text-red-800 hover:shadow-lg hover:shadow-red-400/40",
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
								className={`h-12 w-12 bg-white border-2 border-gray-200 hover:shadow-lg transition-all duration-200 active:scale-95 ${socialMediaInfo.color}`}
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
