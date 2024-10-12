import { create } from "zustand"

type AppState = {
	environment: string
	backendUrl: string
	setEnvironment: () => void
	setBackendUrl: () => void
}

export const useAppStore = create<AppState>((set) => ({
	environment: '',
	backendUrl: '',
	setEnvironment: () => set({ environment: import.meta.env.VITE_ENVIRONMENT || 'development' }),
	setBackendUrl: () => set((state) => {
		switch (state.environment) {
			case 'prod':
				return { backendUrl: import.meta.env.VITE_BACKEND_URL_PROD }
			case 'preprod':
				return { backendUrl: import.meta.env.VITE_BACKEND_URL_PREPROD }
			default:
				return { backendUrl: import.meta.env.VITE_BACKEND_URL_DEV }
		}
	}),
}))
