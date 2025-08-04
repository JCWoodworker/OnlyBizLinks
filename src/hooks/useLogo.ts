import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAppStore } from "../stores/AppStore"
import { useAuthStore } from "../stores/AuthStore"

// API function for logo upload
const uploadLogo = async (
	businessId: number,
	logoFile: File,
	authToken: string,
	backendUrl: string
): Promise<{ logo: string }> => {
	const formData = new FormData()
	formData.append("logo", logoFile)

	const response = await fetch(
		`${backendUrl}/api/v1/business/${businessId}/logo`,
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
			body: formData,
		}
	)

	if (!response.ok) {
		throw new Error("Failed to upload logo")
	}

	return response.json()
}

// Custom hook for logo upload
export const useUploadLogo = (businessId: number) => {
	const { backendUrl } = useAppStore()
	const { authData } = useAuthStore()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (logoFile: File) =>
			uploadLogo(
				businessId,
				logoFile,
				authData!.tokens.accessToken,
				backendUrl
			),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["business", businessId] })
		},
	})
}
