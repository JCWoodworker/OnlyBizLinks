import LinkList from "./LinkList"
import SocialMediaLinkList from "./SocialMediaLinkList"

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

	return (
		<main>
			<div>
				{/* Logo/Business Name Section */}
				<header>
					{businessData?.logo && (
						<section>
							<img
								src={businessData?.logo}
								alt={`${businessData?.name} logo`}
							/>
						</section>
					)}
					{!businessData?.logo && (
						<h1>
							{businessData?.name}
						</h1>
					)}
				</header>

				{/* Social Media Links */}
				<SocialMediaLinkList businessSocialMediaLinks={businessData?.socialLinks || []} />

				{/* Custom Links */}
				<LinkList allLinks={businessData?.customLinks || []} />
			</div>
		</main>
	)
}

export default BizPageLayout
