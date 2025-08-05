import LinkList from "./LinkList"
import SocialMediaLinkList from "./SocialMediaLinkList"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Building2 } from "lucide-react"

export type BusinessData = {
	id: number
	domain: string
	name: string
	logo: string
	socialLinks: SocialLink[]
	customLinks: CustomLink[]
} | null

export type CustomLink = {
	id: number
	business_id: number
	title: string
	url: string
	order: number
}

export type SocialLink = {
	id: number
	business_id: number
	social_media_platform: string
	is_active: boolean
	url: string
}

interface BizPageLayoutProps {
	businessData: BusinessData
}

const BizPageLayout: React.FC<BizPageLayoutProps> = ({ businessData }) => {
	const getBusinessInitials = (name: string) => {
		return name
			.split(" ")
			.map((word) => word.charAt(0))
			.join("")
			.toUpperCase()
			.slice(0, 2)
	}

	return (
		<main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 px-4 py-6">
			<div className="max-w-md mx-auto space-y-6">
				{/* Business Header Card */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
				>
					<Card className="bg-white border-blue-200 shadow-2xl shadow-blue-500/20">
						<CardHeader className="text-center pb-4">
							<div className="flex justify-center mb-4">
								<Avatar className="w-24 h-24 ring-4 ring-blue-400 shadow-xl shadow-blue-500/30">
									{businessData?.logo ? (
										<AvatarImage
											src={businessData.logo}
											alt={`${businessData.name} logo`}
											className="object-contain p-2"
										/>
									) : null}
									<AvatarFallback className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white text-xl font-bold">
										{businessData?.name ? (
											getBusinessInitials(businessData.name)
										) : (
											<Building2 className="w-8 h-8" />
										)}
									</AvatarFallback>
								</Avatar>
							</div>
							<CardTitle className="text-2xl font-bold text-slate-900">
								{businessData?.name || "Business Name"}
							</CardTitle>
						</CardHeader>
					</Card>
				</motion.div>

				{/* Social Media Links Section */}
				{businessData?.socialLinks && businessData.socialLinks.length > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.1 }}
					>
						<Card className="bg-gradient-to-br from-white to-blue-50 border-blue-300 shadow-xl shadow-blue-400/20">
							<CardHeader className="pb-3">
								<CardTitle className="text-lg text-slate-800 font-semibold flex items-center gap-2">
									<div className="w-2 h-2 rounded-full bg-blue-500"></div>
									Connect With Us
								</CardTitle>
							</CardHeader>
							<CardContent className="pt-0">
								<SocialMediaLinkList
									businessSocialMediaLinks={businessData.socialLinks}
								/>
							</CardContent>
						</Card>
					</motion.div>
				)}

				{/* Custom Links Section */}
				{businessData?.customLinks && businessData.customLinks.length > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.2 }}
					>
						<Card className="bg-gradient-to-br from-white to-blue-50 border-blue-300 shadow-xl shadow-blue-400/20">
							<CardHeader className="pb-3">
								<CardTitle className="text-lg text-slate-800 font-semibold flex items-center gap-2">
									<div className="w-2 h-2 rounded-full bg-blue-500"></div>
									Quick Links
								</CardTitle>
							</CardHeader>
							<CardContent className="pt-0">
								<LinkList allLinks={businessData.customLinks} />
							</CardContent>
						</Card>
					</motion.div>
				)}
			</div>
		</main>
	)
}

export default BizPageLayout
