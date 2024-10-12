import { Link } from "@mui/material"

type LinkProps = {
	url: string
	name: string
}

const CustomLink: React.FC<LinkProps> = ({ url, name }) => {
	return (
		<Link href={url} target="_blank" sx={{ textDecoration: "none" }}>
			{name}
		</Link>
	)
}

export default CustomLink
