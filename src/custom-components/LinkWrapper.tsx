import { Link, Box, Card, Typography } from "@mui/material"
import { Launch } from "@mui/icons-material"

type LinkProps = {
	url: string
	title: string
}

const LinkWrapper: React.FC<LinkProps> = ({ url, title }) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				width: "100%",
			}}
		>
			<Card
				component={Link}
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				elevation={0}
				sx={{
					textDecoration: "none",
					color: "inherit",
					width: "100%",
					maxWidth: { xs: "95vw", sm: "380px" },
					minHeight: { xs: 44, sm: 48 },
					px: { xs: 2, sm: 2.5 },
					py: { xs: 1.25, sm: 1.5 },
					borderRadius: { xs: 2.5, sm: 3 },
					background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
					border: "1px solid",
					borderColor: "primary.light",
					boxShadow: {
						xs: "0 2px 8px rgba(102, 126, 234, 0.12)",
						sm: "0 4px 12px rgba(102, 126, 234, 0.15)",
					},
					transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
					position: "relative",
					overflow: "hidden",

					"&::before": {
						content: '""',
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background:
							"linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
						opacity: 0,
						transition: "opacity 0.3s ease",
					},

					"&:hover": {
						transform: { xs: "translateY(-2px)", sm: "translateY(-3px)" },
						boxShadow: {
							xs: "0 4px 16px rgba(102, 126, 234, 0.2)",
							sm: "0 8px 24px rgba(102, 126, 234, 0.25)",
						},
						"&::before": {
							opacity: 1,
						},
					},

					"&:active": {
						transform: "translateY(0)",
						boxShadow: {
							xs: "0 2px 8px rgba(102, 126, 234, 0.15)",
							sm: "0 4px 12px rgba(102, 126, 234, 0.2)",
						},
					},

					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					gap: { xs: 1.5, sm: 2 },
				}}
			>
				<Typography
					variant="body2"
					sx={{
						fontWeight: 600,
						fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
						color: "white",
						textAlign: "left",
						flex: 1,
						letterSpacing: "0.02em",
						lineHeight: 1.3,
					}}
				>
					{title}
				</Typography>

				<Launch
					sx={{
						color: "white",
						fontSize: { xs: 16, sm: 18 },
						opacity: 0.8,
						transition: "all 0.3s ease",
						transform: "translateX(0)",
						".MuiCard-root:hover &": {
							opacity: 1,
							transform: "translateX(2px)",
						},
					}}
				/>
			</Card>
		</Box>
	)
}

export default LinkWrapper
