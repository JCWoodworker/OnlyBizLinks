import { Box, Stack } from "@mui/material"
import LinkWrapper from "../../custom-components/LinkWrapper"
import { useBusinessStore } from "../../stores/BusinessStore"

const LinkList: React.FC = () => {
	const allLinks = useBusinessStore((state) => state.businessCustomLinks)

	if (allLinks.length === 0) {
		return null
	}

	return (
		<Box
			sx={{
				width: "100%",
				maxWidth: { xs: "95vw", sm: "380px" },
			}}
		>
			<Stack
				spacing={{ xs: 2, sm: 2.5 }}
				sx={{
					alignItems: "center",
				}}
			>
				{allLinks.map((link) => (
					<LinkWrapper key={link.id} url={link.url} title={link.title} />
				))}
			</Stack>
		</Box>
	)
}

export default LinkList
