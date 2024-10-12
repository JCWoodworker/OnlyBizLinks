import { Box } from "@mui/material"
import SocialMediaLinks from "./SocialMediaLinks"
import LinkList from "./LinkList"

const BizPageLayout: React.FC = () => {
	// These will eventually be fetched from the database
	const businessName = "Business Name Goes Here"
	const imageSrc =
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJE15mPqGKKRcHEBJJHnBS2kPjC2mn2zFZY-xSZHhWkXkrox4evFzmJ2QAfjIYuAQEYu4&usqp=CAU"

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box
				component="img"
				src={imageSrc}
				alt="Biz Logo"
				sx={{
					width: "200px",
					height: "200px",
					objectFit: "cover",
					borderRadius: "50%",
				}}
			></Box>
			<h2>{businessName}</h2>
			<SocialMediaLinks />
			<LinkList />
		</Box>
	)
}

export default BizPageLayout
