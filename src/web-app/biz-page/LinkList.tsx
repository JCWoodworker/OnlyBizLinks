import { Box, List } from "@mui/material"
import LinkWrapper from "../../custom-components/LinkWrapper"
import { useRestaurantStore } from "../../stores/RestaurantStore"			

const LinkList: React.FC = () => {
	const allLinks = useRestaurantStore((state) => state.restaurantCustomLinks)

	return (
		<Box sx={{ marginTop: 2 }}>
			<List
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: 1,
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
