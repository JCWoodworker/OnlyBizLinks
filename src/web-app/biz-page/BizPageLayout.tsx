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
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
			}}
		>
			{businessLogo && (
				<Box
					component="img"
					src={businessLogo}
					alt={`${businessName} logo`}
					sx={{
						width: "auto",
						height: "200px",
						borderRadius: "10px",
						marginTop: "1rem",
						marginBottom: "2rem",
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
