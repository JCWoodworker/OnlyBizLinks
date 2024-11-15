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
	persistAuth: boolean
	setAuthData: (authData: AuthDataType) => void
	setIsAuthenticated: (isAuthenticated: boolean) => void
	setPersistAuth: (persistAuth: boolean) => void
}

export type SignUpPayload = {
  email: string
  password: string
  signUpOrIn: string
}

export type SignInPayload = {
	email: string
	password: string
	signUpOrIn: string
}

export const useAuthStore = create<AuthState>((set) => ({
	authData: null,
	isAuthenticated: false,
	persistAuth: false,
	setAuthData: (authData: AuthDataType) => set((state: AuthState) => ({ ...state, authData })),
	setIsAuthenticated: (isAuthenticated: boolean) => set((state: AuthState) => ({ ...state, isAuthenticated })),
	setPersistAuth: (persistAuth: boolean) => set((state: AuthState) => ({ ...state, persistAuth })),
}))
