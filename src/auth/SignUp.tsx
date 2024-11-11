import { Box } from "@mui/material"
import SignUpForm from "./SignUpForm"

const SignUp = () => {

	return (
		<Box sx={{
      display: "flex",
      flexDirection: "column",
      placeItems: "center"
    }}>
			<h3>Sign Up</h3>
			<SignUpForm />
		</Box>
	)
}

export default SignUp
