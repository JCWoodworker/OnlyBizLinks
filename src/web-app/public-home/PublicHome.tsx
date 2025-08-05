import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { Badge } from "../../../components/ui/badge"
import {
	Avatar,
	AvatarImage,
	AvatarFallback,
} from "../../../components/ui/avatar"
import { motion } from "framer-motion"
import { Mail, Users, ExternalLink } from "lucide-react"

const PublicHome = () => {
	const businessList = [
		{ name: "Foolproof Brewery", domain: "foolproofbrewery", type: "Brewery" },
		{ name: "Ocean Mist", domain: "oceanmistrestaurant", type: "Restaurant" },
	]
	const navigate = useNavigate()

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
			<div className="max-w-md mx-auto px-4 py-8 space-y-8">
				{/* Hero Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl">
						<CardHeader className="text-center pb-6">
							{/* Logo Container */}
							<motion.div
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="flex justify-center mb-6"
							>
								<Avatar className="w-32 h-32 ring-4 ring-white shadow-xl">
									<AvatarImage
										src="https://myrestaurantlinks-images.s3.us-east-2.amazonaws.com/OnlyBizLinksLogo.svg"
										alt="OnlyBizLinks"
										className="object-cover"
									/>
									<AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl font-bold">
										OBL
									</AvatarFallback>
								</Avatar>
							</motion.div>

							{/* Main Heading */}
							<CardTitle className="text-3xl font-bold text-gray-900 mb-3">
								OnlyBizLinks
							</CardTitle>

							{/* Subtitle */}
							<CardDescription className="text-base text-gray-600 leading-relaxed">
								Premium digital solutions for restaurants and breweries,
								seamlessly integrated into handcrafted NFC-enabled products by
								RI Local Woodworks
							</CardDescription>
						</CardHeader>
					</Card>
				</motion.div>

				{/* Business Listings Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
						<CardHeader className="pb-4">
							<CardTitle className="text-xl text-gray-800 flex items-center gap-2">
								<Users className="w-5 h-5" />
								Featured Businesses
							</CardTitle>
						</CardHeader>
						<CardContent className="pt-0 space-y-3">
							{businessList.map((business, index) => (
								<motion.div
									key={business.domain}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: 0.1 * index }}
								>
									<Link to={`/${business.domain}`} className="block">
										<Card className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 active:scale-[0.98]">
											<CardContent className="p-4">
												<div className="flex items-center justify-between">
													<div className="flex-1">
														<div className="flex items-center gap-2 mb-1">
															<Badge variant="secondary" className="text-xs">
																{business.type}
															</Badge>
														</div>
														<h3 className="font-semibold text-gray-900 mb-1">
															{business.name}
														</h3>
														<p className="text-sm text-gray-600">
															View Menu & Links
														</p>
													</div>
													<ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
												</div>
											</CardContent>
										</Card>
									</Link>
								</motion.div>
							))}
						</CardContent>
					</Card>
				</motion.div>

				{/* Contact & CTA Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
						<CardHeader className="pb-4">
							<CardTitle className="text-lg text-gray-800 text-center">
								Get Started Today
							</CardTitle>
							<CardDescription className="text-center">
								Interested in premium NFC solutions for your business?
							</CardDescription>
						</CardHeader>
						<CardContent className="pt-0 space-y-3">
							<Button
								asChild
								size="lg"
								className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium"
							>
								<a
									href="mailto:jc@rilocalwoodworks.com"
									className="flex items-center gap-2"
								>
									<Mail className="w-4 h-4" />
									Get in Touch
								</a>
							</Button>

							<Button
								variant="outline"
								size="lg"
								className="w-full h-12 bg-white/50 backdrop-blur-sm"
								onClick={() => navigate("/signin")}
							>
								Business Sign In
							</Button>

							<p className="text-xs text-gray-500 text-center pt-2">
								Crafted with precision by RI Local Woodworks
							</p>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</div>
	)
}

export default PublicHome
