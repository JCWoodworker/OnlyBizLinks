import { create } from "zustand"

export type CustomLink = {
	id: number
	title: string
	url: string
}

type RestaurantState = {
	restaurantId: number | null
	restaurantName: string | null
	restaurantDomain: string | null
	restaurantLogo: string | null
	restaurantCustomLinks: CustomLink[]
}

type RestaurantAction = {
	setRestaurant: (
		id: number | null,
		name: string | null,
		domain: string | null,
		logo: string | null,
		customLinks: CustomLink[]
	) => void
}

export const useRestaurantStore = create<RestaurantState & RestaurantAction>(
	(set) => ({
		restaurantId: null,
		restaurantName: null,
		restaurantDomain: null,
		restaurantLogo: null,
		restaurantCustomLinks: [],

		setRestaurant: (id, name, domain, logo, customLinks) =>
			set(() => ({
				restaurantId: id,
				restaurantName: name,
				restaurantDomain: domain,
				restaurantLogo: logo,
				restaurantCustomLinks: customLinks || [],
			})),
	})
)
