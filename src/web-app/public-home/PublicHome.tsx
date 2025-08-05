import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const PublicHome = () => {
	const businessList = [
		{ name: "Foolproof Brewery", domain: "foolproofbrewery", type: "Brewery" },
		{ name: "Ocean Mist", domain: "oceanmistrestaurant", type: "Restaurant" },
	]
	const navigate = useNavigate()

	return (
		<div>
			{/* Hero Section */}
			<header>
				{/* Logo Container */}
				<div>
					<img
						src="https://myrestaurantlinks-images.s3.us-east-2.amazonaws.com/OnlyBizLinksLogo.svg"
						alt="OnlyBizLinks"
						style={{
							width: "200px",
							height: "200px",
							borderRadius: "20px",
							boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
						}}
					/>
				</div>

				{/* Main Heading */}
				<h1>
					OnlyBizLinks
				</h1>

				{/* Subtitle */}
				<h2>
					Premium digital solutions for restaurants and breweries, seamlessly
					integrated into handcrafted NFC-enabled products by RI Local Woodworks
				</h2>
			</header>

			{/* Business Listings Section */}
			<main>
				<h2>
					Featured Businesses
				</h2>

				<div>
					{businessList.map((business) => (
						<Link
							key={business.domain}
							to={`/${business.domain}`}
							style={{ textDecoration: "none" }}
						>
							<article>
								<div>
									<span>{business.type}</span>
									<h3>
										{business.name}
									</h3>
									<p>
										View Menu & Links
									</p>
								</div>
							</article>
						</Link>
					))}
				</div>
			</main>

			{/* Contact & CTA Section */}
			<footer>
				<p>
					Interested in premium NFC solutions for your business?
				</p>

				<div>
					<a href="mailto:jc@rilocalwoodworks.com">
						<button>
							Get in Touch
						</button>
					</a>

					<button onClick={() => navigate("/signin")}>
						Business Sign In
					</button>
				</div>

				<p>
					Crafted with precision by RI Local Woodworks
				</p>
			</footer>
		</div>
	)
}

export default PublicHome
