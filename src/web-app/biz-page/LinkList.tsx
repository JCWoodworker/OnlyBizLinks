import { Box, List } from "@mui/material"
import LinkWrapper from "../../custom-components/LinkWrapper"
import { useRestaurantStore } from "../../stores/RestaurantStore"			

const LinkList: React.FC = () => {
	const allLinks = useRestaurantStore((state) => state.restaurantCustomLinks)

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
