import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const NotFound = () => {
	const navigate = useNavigate()
	const [countdown, setCountdown] = useState(3)

	useEffect(() => {
		const redirectToHome = () => {
			navigate("/")
		}

		const timer = setInterval(() => {
			setCountdown((prev) => {
				if (prev <= 1) {
					clearInterval(timer)
					redirectToHome()
					return 0
				}
				return prev - 1
			})
		}, 1000)

		return () => {
			clearInterval(timer)
		}
	}, [navigate])

	return (
		<div>
			<div>
				<div>
					🤷‍♀️
				</div>

				<h1>
					Oops! Business Not Found
				</h1>

				<p>
					We searched everywhere, but this business seems to have vanished
					into thin air! ✨
				</p>

				<div>
					<Link to="/">
						<button>
							🏠 Take Me Home
						</button>
					</Link>

					<div>
						<p>
							Auto-redirecting in {countdown}s
						</p>
						<div>
							⏳
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NotFound
