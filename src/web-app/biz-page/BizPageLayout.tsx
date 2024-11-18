import { Box, Typography } from "@mui/material"
import SocialMediaLinkWrapper from "./SocialMediaLinkWrapper"
import LinkList from "./LinkList"
import { useBusinessStore } from "../../stores/BusinessStore"

const BizPageLayout: React.FC = () => {
	const businessName = useBusinessStore((state) => state.businessName)
	const businessLogo: string | null = useBusinessStore(
		(state) => state.businessLogo
	)

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				placeItems: "center",
				textAlign: "center",
			}}
		>
			{businessLogo && (
				<Box
					component="img"
					src={businessLogo}
					alt={`${businessName} logo`}
					sx={{
						width: { xs: "100%", sm: "300px" },
						maxWidth: "300px",
						height: "auto",
						objectFit: "contain",
						borderRadius: "10px",
					}}
				/>
			)}
			{!businessLogo && <Typography variant="h3">{businessName}</Typography>}
			<SocialMediaLinkWrapper />
			<LinkList />
		</Box>
	)
}

export default BizPageLayout
