import React, { useEffect, useState } from "react"
import { useParams, Navigate } from "react-router-dom"
import { useRestaurantStore } from "../../stores/RestaurantStore"
import BizPageLayout from "./BizPageLayout"

const BizPageWrapper: React.FC = () => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const { "*": incomingDomain } = useParams<{ "*": string }>()
	const setRestaurant = useRestaurantStore((state) => state.setRestaurant)

	useEffect(() => {
		const fetchRestaurant = async () => {
			try {
				const response = await fetch(
					`http://localhost:3000/api/v1/subapps/myrestaurantlinks/${incomingDomain}`
				)
				if (!response.ok) {
					throw new Error("Restaurant not found")
				}
				const data = await response.json()
				setRestaurant(data.id, data.name, data.logo, data.domain)
				setLoading(false)
			} catch (err) {
				console.error("Error fetching restaurant:", err)
				setError(true)
				setLoading(false)
			}
		}

		if (incomingDomain) {
			fetchRestaurant()
		} else {
			setError(true)
			setLoading(false)
		}
	}, [incomingDomain, setRestaurant])

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <Navigate to="/404" />
	}

	return <BizPageLayout />
}

export default BizPageWrapper
