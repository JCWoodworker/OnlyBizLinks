import { Button } from "../../components/ui/button"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

type LinkProps = {
	url: string
	title: string
}

const LinkWrapper: React.FC<LinkProps> = ({ url, title }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			className="w-full"
		>
			<Button
				asChild
				variant="outline"
				size="lg"
				className="w-full h-12 justify-between text-left bg-white/50 backdrop-blur-sm border-gray-200 hover:bg-white/80 hover:border-gray-300 hover:shadow-md transition-all duration-200 active:scale-[0.98]"
			>
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-between w-full px-4 py-3"
				>
					<span className="font-medium text-gray-900 truncate pr-2">
						{title}
					</span>
					<ExternalLink className="w-4 h-4 text-gray-500 flex-shrink-0" />
				</a>
			</Button>
		</motion.div>
	)
}

export default LinkWrapper
