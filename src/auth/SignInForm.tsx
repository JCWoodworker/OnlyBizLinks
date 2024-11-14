import { Box, Button, TextField } from "@mui/material"

const SignInForm = () => {
	return (
		<form>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "10px",
				}}
			>
				<TextField label="Email" />
				<TextField label="Password" />
				<Button type="submit">Sign In</Button>
			</Box>
		</form>
	)
}

export default SignInForm
