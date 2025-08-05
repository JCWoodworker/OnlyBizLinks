type LinkProps = {
	url: string
	title: string
}

const LinkWrapper: React.FC<LinkProps> = ({ url, title }) => {
	return (
		<div>
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<span>{title}</span>
				<span>↗</span>
			</a>
		</div>
	)
}

export default LinkWrapper
