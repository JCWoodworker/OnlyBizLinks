import { Link } from "@mui/material"

type LinkProps = {
	url: string
	title: string
}

const LinkWrapper: React.FC<LinkProps> = ({ url, title }) => {
	return (
		<Link href={url} target="_blank" sx={{ textDecoration: "none" }}>
			{title}
		</Link>
	)
}

export default LinkWrapper
