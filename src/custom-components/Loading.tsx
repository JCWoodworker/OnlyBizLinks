import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const Loading: React.FC = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 px-4 py-6">
			<div className="max-w-md mx-auto space-y-6">
				{/* Business Header Skeleton */}
				<Card className="bg-gradient-to-br from-white to-blue-50 border-blue-300 shadow-xl shadow-blue-400/20">
					<CardHeader className="text-center pb-4">
						<div className="flex justify-center mb-4">
							<Skeleton className="w-24 h-24 rounded-full" />
						</div>
						<Skeleton className="h-8 w-48 mx-auto mb-2" />
					</CardHeader>
				</Card>

				{/* Social Media Links Skeleton */}
				<Card className="bg-gradient-to-br from-white to-blue-50 border-blue-300 shadow-xl shadow-blue-400/20">
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
				<Card className="bg-gradient-to-br from-white to-blue-50 border-blue-300 shadow-xl shadow-blue-400/20">
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
