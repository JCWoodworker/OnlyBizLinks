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

type AuthState = {
	authData: AuthDataType | null
	isAuthenticated: boolean
}

export type SignUpPayload = {
  email: string
  password: string
  signUpOrIn: string
}

export const useAuthStore = create<AuthState>(() => ({
	authData: null,
	isAuthenticated: false,
}))
