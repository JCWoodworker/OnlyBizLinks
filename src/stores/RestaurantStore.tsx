import { create } from "zustand"

// TODO: manual refresh sends a 404 instead of just keeping the same data

type RestaurantState = {
	restaurantId: number | null
	restaurantName: string | null
	restaurantDomain: string | null
	restaurantLogo: string | null
}

type RestaurantAction = {
	setRestaurant: (
		id: number | null,
		name: string | null,
		domain: string | null,
		logo: string | null
	) => void
}

export const useRestaurantStore = create<RestaurantState & RestaurantAction>(
	(set) => ({
		restaurantId: null,
		restaurantName: null,
		restaurantDomain: null,
		restaurantLogo: null,

		setRestaurant: (id, name, domain, logo) =>
			set(() => ({
				restaurantId: id,
				restaurantName: name,
				restaurantDomain: domain,
				restaurantLogo: logo,
			})),
	})
)
