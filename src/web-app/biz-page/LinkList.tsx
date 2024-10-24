import { Box, List } from "@mui/material"
import LinkWrapper from "../../custom-components/LinkWrapper"
import { useBusinessStore } from "../../stores/BusinessStore"

const LinkList: React.FC = () => {
	const allLinks = useBusinessStore((state) => state.businessCustomLinks)

	return (
		<Box>
			<List
				sx={{
					display: "flex",
					flexDirection: "column",
					placeContent: "center",
					gap: 1.5,
				}}
			>
				{allLinks.map((link) => (
					<LinkWrapper key={link.id} url={link.url} title={link.title} />
				))}
			</List>
		</Box>
	)
}

export default LinkList
