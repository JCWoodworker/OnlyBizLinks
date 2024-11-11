import { create } from "zustand"

type UserInfoType = {
	firstName: string
	lastName: string
	imageUrl: string
	role: string
}

type TokenType = {
	accessToken: string
	refreshToken: string
}

type AuthDataType = {
	userInfo: UserInfoType
	tokens: TokenType
}

type SignUpPayloadType = {
	username: string
	password: string
	signUpOrIn: string
}

type AuthState = {
	authData: AuthDataType | null
	isAuthenticated: boolean
	signUserUp: (signUpPayload: SignUpPayloadType) => void
	signUserIn: () => void
}

export const useAuthStore = create<AuthState>(() => ({
	// authData: {
	// 	userInfo: {
	// 		firstName: "James",
	// 		lastName: "Corey",
	// 		imageUrl: "",
	// 		role: "admin"
	// 	},
	// 	tokens: {
	// 		accessToken: "fakeAccessToken",
	// 		refreshToken: "fakeRefreshToken"
	// 	}
	// },
	authData: null,
	isAuthenticated: false,
	signUserUp: async (signUpPayload: SignUpPayloadType) => {
		try {
			const response = await fetch(
				"http://localhost:3000/api/v1/authentication/sign-up",
				{
					method: "post",
					body: JSON.stringify(signUpPayload),
					headers: new Headers({
						"Content-Type": "application/json",
					}),
				}
			)
			if (!response.ok) {
				console.error("There was a problem signing up")
			}
			
			const userData = response.json()
			console.log("USERDATA: ", userData)
			
			return userData
		} catch (error) {
			console.error(error)
		}
	},
	signUserIn: () => {
		return alert("signing in")
	},
}))
