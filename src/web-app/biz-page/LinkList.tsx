import { Box, List } from "@mui/material"
import LinkWrapper from "../../custom-components/LinkWrapper"

type bizLink = {
	id: number
	name: string
	url: string
}

const LinkList: React.FC = () => {
	// This will eventually be fetched from the database
	const allLinks: bizLink[] = [
		{ id: 1, name: "Link 1 of many", url: "https://www.google.com" },
		{ id: 2, name: "Link 2 of many", url: "https://www.google.com" },
		{ id: 3, name: "Link 3 of many", url: "https://www.google.com" },
		{ id: 4, name: "Link 4 of many", url: "https://www.google.com" },
		{ id: 5, name: "Link 5 of many", url: "https://www.google.com" },
	]

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
					<LinkWrapper key={link.id} url={link.url} name={link.name} />
				))}
			</List>
		</Box>
	)
}

export default LinkList
