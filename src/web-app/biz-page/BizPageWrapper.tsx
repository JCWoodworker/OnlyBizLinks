import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BizPageLayout from "./BizPageLayout"
import NotFound from "../NotFound"
import Loading from "../../custom-components/Loading"

import { useAppStore } from "../../stores/AppStore"
import { useRestaurantStore } from "../../stores/RestaurantStore"

const BizPageWrapper: React.FC = () => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const { businessDomain } = useParams<{ businessDomain: string }>()
	const setRestaurant = useRestaurantStore((state) => state.setRestaurant)
	const backendUrl = useAppStore((state) => state.backendUrl)

	const fetchRestaurant = async () => {
		try {
			const response = await fetch(
				`${backendUrl}/api/v1/subapps/myrestaurantlinks/${businessDomain}`
			)
			const data = await response.json()
			if (data.status && data.status === 404) {
				setError(true)
				setLoading(false)
			} else if (data.id && data.domain) {
				setRestaurant(data.id, data.name, data.domain, data.logo)
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
	}, [businessDomain, backendUrl])

	if (loading) {
		return <Loading />
	}

	if (error) {
		return <NotFound />
	}

	return <BizPageLayout />
}

export default BizPageWrapper
