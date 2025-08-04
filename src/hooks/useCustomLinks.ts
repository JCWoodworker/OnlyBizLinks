import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAppStore } from "../stores/AppStore"
import { useAuthStore } from "../stores/AuthStore"
import { CustomLink } from "./useBusinessData"

// API functions
const createCustomLink = async (
	businessId: number,
	linkData: Omit<CustomLink, "id" | "business_id">,
	authToken: string,
	backendUrl: string
): Promise<CustomLink> => {
	const response = await fetch(
		`${backendUrl}/api/v1/business/${businessId}/custom-links`,
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
		throw new Error("Failed to create custom link")
	}

	return response.json()
}

const updateCustomLink = async (
	businessId: number,
	linkId: number,
	linkData: Partial<Omit<CustomLink, "id" | "business_id">>,
	authToken: string,
	backendUrl: string
): Promise<CustomLink> => {
	const response = await fetch(
		`${backendUrl}/api/v1/business/${businessId}/custom-links/${linkId}`,
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
		throw new Error("Failed to update custom link")
	}

	return response.json()
}

const deleteCustomLink = async (
	businessId: number,
	linkId: number,
	authToken: string,
	backendUrl: string
): Promise<void> => {
	const response = await fetch(
		`${backendUrl}/api/v1/business/${businessId}/custom-links/${linkId}`,
		{
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${authToken}`,
				"Content-Type": "application/json",
			},
		}
	)

	if (!response.ok) {
		throw new Error("Failed to delete custom link")
	}
}

const reorderCustomLinks = async (
	businessId: number,
	linkOrders: { id: number; order: number }[],
	authToken: string,
	backendUrl: string
): Promise<void> => {
	const response = await fetch(
		`${backendUrl}/api/v1/business/${businessId}/custom-links/reorder`,
		{
			method: "PUT",
			headers: {
				Authorization: `Bearer ${authToken}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ linkOrders }),
		}
	)

	if (!response.ok) {
		throw new Error("Failed to reorder custom links")
	}
}

// Custom hooks for custom links mutations
export const useCreateCustomLink = (businessId: number) => {
	const { backendUrl } = useAppStore()
	const { authData } = useAuthStore()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (linkData: Omit<CustomLink, "id" | "business_id">) =>
			createCustomLink(
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

export const useUpdateCustomLink = (businessId: number) => {
	const { backendUrl } = useAppStore()
	const { authData } = useAuthStore()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({
			linkId,
			linkData,
		}: {
			linkId: number
			linkData: Partial<Omit<CustomLink, "id" | "business_id">>
		}) =>
			updateCustomLink(
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

export const useDeleteCustomLink = (businessId: number) => {
	const { backendUrl } = useAppStore()
	const { authData } = useAuthStore()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (linkId: number) =>
			deleteCustomLink(
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

export const useReorderCustomLinks = (businessId: number) => {
	const { backendUrl } = useAppStore()
	const { authData } = useAuthStore()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (linkOrders: { id: number; order: number }[]) =>
			reorderCustomLinks(
				businessId,
				linkOrders,
				authData!.tokens.accessToken,
				backendUrl
			),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["business", businessId] })
		},
	})
}
