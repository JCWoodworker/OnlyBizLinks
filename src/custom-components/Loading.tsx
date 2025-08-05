import { Card, CardContent, CardHeader } from "../../components/ui/card"
import { Skeleton } from "../../components/ui/skeleton"

const Loading: React.FC = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-6">
			<div className="max-w-md mx-auto space-y-6">
				{/* Business Header Skeleton */}
				<Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
					<CardHeader className="text-center pb-4">
						<div className="flex justify-center mb-4">
							<Skeleton className="w-24 h-24 rounded-full" />
						</div>
						<Skeleton className="h-8 w-48 mx-auto mb-2" />
					</CardHeader>
				</Card>

				{/* Social Media Links Skeleton */}
				<Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
					<CardHeader className="pb-3">
						<Skeleton className="h-6 w-32" />
					</CardHeader>
					<CardContent className="pt-0">
						<div className="flex gap-3 overflow-x-auto pb-2">
							{[1, 2, 3].map((i) => (
								<Skeleton key={i} className="h-12 w-28 flex-shrink-0" />
							))}
						</div>
					</CardContent>
				</Card>

				{/* Custom Links Skeleton */}
				<Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
					<CardHeader className="pb-3">
						<Skeleton className="h-6 w-24" />
					</CardHeader>
					<CardContent className="pt-0">
						<div className="space-y-3">
							{[1, 2, 3, 4].map((i) => (
								<Skeleton key={i} className="h-12 w-full" />
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

export default Loading
