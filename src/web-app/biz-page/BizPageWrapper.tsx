import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BizPageLayout from "./BizPageLayout"
import NotFound from "../NotFound"
import Loading from "../../custom-components/Loading"

import { useAppStore } from "../../stores/AppStore"
import { useRestaurantStore } from "../../stores/RestaurantStore"

const BizPageWrapper: React.FC = () => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const { businessDomain } = useParams<{ businessDomain: string }>()
	const setRestaurant = useRestaurantStore((state) => state.setRestaurant)
	const backendUrl = useAppStore((state) => state.backendUrl)

	const fetchRestaurant = async () => {
		if (!businessDomain) {
			console.error("Business domain is undefined")
			setError("Business domain is missing")
			setLoading(false)
			return
		}

		const url = `${backendUrl}/api/v1/subapps/myrestaurantlinks/${businessDomain}`
		console.log("Fetching from URL:", url)

		try {
			const response = await fetch(url)
			console.log("Response status:", response.status)

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}

			const data = await response.json()
			console.log("Received data:", data)

			setRestaurant(data.id, data.name, data.domain, data.logo)
			setError(null)
			setLoading(false)
		} catch (err) {
			console.error("Error fetching restaurant:", err)
			setError(err instanceof Error ? err.message : String(err))
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchRestaurant()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [businessDomain, backendUrl])

	if (loading) {
		return <Loading />
	}

	if (error) {
		console.error("Rendering error state:", error)
		return <NotFound />
	}

	return <BizPageLayout />
}

export default BizPageWrapper
