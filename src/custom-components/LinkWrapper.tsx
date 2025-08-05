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
				className="w-full h-12 justify-between text-left bg-gradient-to-r from-white to-blue-50 border-blue-200 hover:from-blue-50 hover:to-indigo-100 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-400/30 transition-all duration-200 active:scale-[0.98]"
			>
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-between w-full px-4 py-3 group"
				>
					<span className="font-medium text-slate-800 truncate pr-2">
						{title}
					</span>
					<ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
				</a>
			</Button>
		</motion.div>
	)
}

export default LinkWrapper
