import LinkWrapper from "../../custom-components/LinkWrapper"
import { CustomLink } from "./BizPageLayout"

interface LinkListProps {
	allLinks: CustomLink[]
}

const LinkList: React.FC<LinkListProps> = ({ allLinks }) => {
	if (allLinks.length === 0) {
		return null
	}

	// Sort links by order
	const sortedLinks = [...allLinks].sort((a, b) => a.order - b.order)

	return (
		<div className="space-y-3">
			{sortedLinks.map((link, index) => (
				<div key={link.id} style={{ animationDelay: `${index * 0.1}s` }}>
					<LinkWrapper url={link.url} title={link.title} />
				</div>
			))}
		</div>
	)
}

export default LinkList
