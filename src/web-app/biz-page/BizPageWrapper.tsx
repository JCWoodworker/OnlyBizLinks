import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BizPageLayout from "./BizPageLayout"
import NotFound from "../NotFound"
import Loading from "../../custom-components/Loading"

import { useAppStore } from "../../stores/AppStore"
import { useBusinessStore } from "../../stores/BusinessStore"

const BizPageWrapper: React.FC = () => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const { businessDomain } = useParams<{ businessDomain: string }>()

	const setBusiness = useBusinessStore((state) => state.setBusiness)
	const { backendUrl, appUrl, configLoaded } = useAppStore()

	const fetchBusiness = async () => {
		if (!businessDomain) {
			console.error("Business domain is undefined")
			setError("Business domain is missing")
			setLoading(false)
			return
		}

		const url = `${backendUrl}/${appUrl}/${businessDomain}`

		try {
			const response = await fetch(url)

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}

			const data = await response.json()

			setBusiness(
				data.id,
				data.name,
				data.domain,
				data.logo,
				data.customLinks,
				data.socialLinks
			)
			setError(null)
			setLoading(false)
		} catch (err) {
			console.error("Error fetching business:", err)
			setError(err instanceof Error ? err.message : String(err))
			setLoading(false)
		}
	}

	useEffect(() => {
		if (configLoaded) {
			fetchBusiness()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [configLoaded, businessDomain, backendUrl, appUrl])

	if (!configLoaded || loading) {
		return <Loading />
	}

	if (error) {
		console.error("Rendering error state:", error)
		return <NotFound />
	}

	return <BizPageLayout />
}

export default BizPageWrapper
