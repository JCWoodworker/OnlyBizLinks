import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useRestaurantStore } from "../../stores/RestaurantStore"
import BizPageLayout from "./BizPageLayout"
import NotFound from "../NotFound"
import Loading from "../../custom-components/Loading"

const BizPageWrapper: React.FC = () => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const { businessDomain } = useParams<{ businessDomain: string }>()
	const setRestaurant = useRestaurantStore((state) => state.setRestaurant)

	const fetchRestaurant = async () => {
		try {
			const response = await fetch(
				`http://localhost:3000/api/v1/subapps/myrestaurantlinks/${businessDomain}`
			)
			const data = await response.json()
			if (data.status && data.status === 404) {
				setError(true)
				setLoading(false)
			} else if (data.id && data.domain) {
				setRestaurant(data.id, data.name, data.logo, data.domain)
				setLoading(false)
			} else {
				setError(true)
				setLoading(false)
			}
		} catch (err) {
			console.error("Error fetching restaurant:", err)
			setError(true)
			setLoading(false)
		}
	}

	useEffect(() => {
		if (businessDomain) {
			fetchRestaurant()
		} else {
			setError(true)
			setLoading(false)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [businessDomain])

	if (loading) {
		return <Loading />
	}

	if (error) {
		return <NotFound />
	}

	return <BizPageLayout />
}

export default BizPageWrapper
