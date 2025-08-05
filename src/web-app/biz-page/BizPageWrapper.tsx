import { useEffect, useState } from "react"
import BizPageLayout, { BusinessData } from "./BizPageLayout"
import { useNavigate, useParams } from "react-router-dom"
import Loading from "../../custom-components/Loading"

const BizPageWrapper: React.FC = () => {
	const navigate = useNavigate()
	const { businessDomain } = useParams<{ businessDomain: string }>()
	const [businessData, setBusinessData] = useState<BusinessData | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	const fetchBusiness = async () => {
		try {
			setIsLoading(true)
			const response = await fetch(
				`${import.meta.env.VITE_BACKEND_URL}/${
					import.meta.env.VITE_ONLYBIZLINKS_URL
				}/${businessDomain}`
			)
			if (!response.ok && response.status === 404) {
				navigate("/404")
				return
			}
			const data = await response.json()
			setBusinessData(data)
		} catch (error) {
			console.error("Error fetching business data:", error)
			navigate("/404")
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchBusiness()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [businessDomain])

	if (isLoading) {
		return <Loading />
	}

	return <BizPageLayout businessData={businessData} />
}

export default BizPageWrapper
