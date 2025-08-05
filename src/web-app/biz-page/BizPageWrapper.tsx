import { useEffect, useState } from "react"
import BizPageLayout, { BusinessData } from "./BizPageLayout"
import { useNavigate, useParams } from "react-router-dom"

const BizPageWrapper: React.FC = () => {
	const navigate = useNavigate()
	const { businessDomain } = useParams<{ businessDomain: string }>()
	const [businessData, setBusinessData] = useState<BusinessData | null>(null)

	const fetchBusiness = 
		async () => {
			const response = await fetch(
				`https://nestjs-mega-backend-prod-893a099fba68.herokuapp.com/${import.meta.env.VITE_ONLYBIZLINKS_URL}/${businessDomain}`
			)
			if (!response.ok && response.status === 404) {
				navigate("/404")
				return
			}
			const data = await response.json()
			setBusinessData(data)
		}

	useEffect(() => {
		fetchBusiness()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [businessDomain])

	return <BizPageLayout businessData={businessData} />
}

export default BizPageWrapper
