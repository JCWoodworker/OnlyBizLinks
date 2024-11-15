import { Box } from "@mui/material"
import SignInForm from "./SignInForm"

const SignIn = () => {
	return (
		<>
			<h3>Sign In</h3>
			<Box
				sx={{
					padding: "20px",
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					border: "1px solid black",
					borderRadius: "10px",
					boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
				}}
			>
				<SignInForm />
			</Box>
		</>
	)
}

export default SignIn
