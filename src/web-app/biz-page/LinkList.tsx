import LinkWrapper from "../../custom-components/LinkWrapper"
import { CustomLink } from "./BizPageLayout"

interface LinkListProps {
	allLinks: CustomLink[]
}

const LinkList: React.FC<LinkListProps> = ({ allLinks }) => {
	if (allLinks.length === 0) {
		return null
	}

	return (
		<div>
			<div>
				{allLinks.map((link) => (
					<LinkWrapper key={link.id} url={link.url} title={link.title} />
				))}
			</div>
		</div>
	)
}

export default LinkList
