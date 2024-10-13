import { Link, Box } from "@mui/material"

type LinkProps = {
	url: string
	title: string
}

const LinkWrapper: React.FC<LinkProps> = ({ url, title }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				width: '100%',
			}}
		>
			<Link
				href={url}
				target="_blank"
				sx={{
					textDecoration: "none",
					color: "inherit",
					padding: "4px 8px",
					borderRadius: "4px",
					border: "1px solid #ccc",
					boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)",
					transition: "all 0.5s ease",
					flex: 1,
					display: 'block',
					textAlign: 'center',
					"&:hover": {
						fontWeight: "bold",
						boxShadow: "0 6px 12px rgba(0, 0, 0, 0.55)",
					},
				}}
			>
				{title}
			</Link>
		</Box>
	)
}

export default LinkWrapper
