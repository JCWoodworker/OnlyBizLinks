import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useAppStore } from "../stores/AppStore"
import { useAuthStore } from "../stores/AuthStore"

// Types
export type BusinessData = {
	id: number
	domain: string
	name: string
	logo: string
	socialLinks: SocialLink[]
	customLinks: CustomLink[]
}

export type CustomLink = {
	id: number
	business_id: number
	title: string
	url: string
	order: number
}

export type SocialLink = {
	id: number
	business_id: number
	social_media_platform: string
	isActive: boolean
	url: string
}

// API functions
const fetchBusinessData = async (
	businessId: number,
	authToken: string,
	backendUrl: string
): Promise<BusinessData> => {
	const response = await fetch(`${backendUrl}/api/v1/business/${businessId}`, {
		headers: {
			Authorization: `Bearer ${authToken}`,
			"Content-Type": "application/json",
		},
	})

	if (!response.ok) {
		throw new Error("Failed to fetch business data")
	}

	return response.json()
}

// Custom hook for fetching business data
export const useBusinessData = (businessId?: number) => {
	const { backendUrl } = useAppStore()
	const { authData } = useAuthStore()

	return useQuery({
		queryKey: ["business", businessId],
		queryFn: () =>
			fetchBusinessData(businessId!, authData!.tokens.accessToken, backendUrl),
		enabled: !!businessId && !!authData,
		staleTime: 5 * 60 * 1000, // 5 minutes
	})
}

// Custom hook for refreshing business data
export const useRefreshBusinessData = () => {
	const queryClient = useQueryClient()

	return (businessId: number) => {
		queryClient.invalidateQueries({ queryKey: ["business", businessId] })
	}
}
