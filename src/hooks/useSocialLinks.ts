import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAppStore } from "../stores/AppStore"
import { useAuthStore } from "../stores/AuthStore"
import { SocialLink } from "./useBusinessData"

// API functions
const updateSocialLink = async (
	businessId: number,
	linkId: number,
	linkData: Partial<Omit<SocialLink, "id" | "business_id">>,
	authToken: string,
	backendUrl: string
): Promise<SocialLink> => {
	const response = await fetch(
		`${backendUrl}/api/v1/business/${businessId}/social-links/${linkId}`,
		{
			method: "PUT",
			headers: {
				Authorization: `Bearer ${authToken}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(linkData),
		}
	)

	if (!response.ok) {
		throw new Error("Failed to update social link")
	}

	return response.json()
}

const createSocialLink = async (
	businessId: number,
	linkData: Omit<SocialLink, "id" | "business_id">,
	authToken: string,
	backendUrl: string
): Promise<SocialLink> => {
	const response = await fetch(
		`${backendUrl}/api/v1/business/${businessId}/social-links`,
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${authToken}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(linkData),
		}
	)

	if (!response.ok) {
		throw new Error("Failed to create social link")
	}

	return response.json()
}

const deleteSocialLink = async (
	businessId: number,
	linkId: number,
	authToken: string,
	backendUrl: string
): Promise<void> => {
	const response = await fetch(
		`${backendUrl}/api/v1/business/${businessId}/social-links/${linkId}`,
		{
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${authToken}`,
				"Content-Type": "application/json",
			},
		}
	)

	if (!response.ok) {
		throw new Error("Failed to delete social link")
	}
}

// Custom hooks for social links mutations
export const useUpdateSocialLink = (businessId: number) => {
	const { backendUrl } = useAppStore()
	const { authData } = useAuthStore()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({
			linkId,
			linkData,
		}: {
			linkId: number
			linkData: Partial<Omit<SocialLink, "id" | "business_id">>
		}) =>
			updateSocialLink(
				businessId,
				linkId,
				linkData,
				authData!.tokens.accessToken,
				backendUrl
			),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["business", businessId] })
		},
	})
}

export const useCreateSocialLink = (businessId: number) => {
	const { backendUrl } = useAppStore()
	const { authData } = useAuthStore()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (linkData: Omit<SocialLink, "id" | "business_id">) =>
			createSocialLink(
				businessId,
				linkData,
				authData!.tokens.accessToken,
				backendUrl
			),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["business", businessId] })
		},
	})
}

export const useDeleteSocialLink = (businessId: number) => {
	const { backendUrl } = useAppStore()
	const { authData } = useAuthStore()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (linkId: number) =>
			deleteSocialLink(
				businessId,
				linkId,
				authData!.tokens.accessToken,
				backendUrl
			),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["business", businessId] })
		},
	})
}
