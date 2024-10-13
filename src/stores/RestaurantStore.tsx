import { create } from "zustand"

export type CustomLink = {
	id: number
	title: string
	url: string
}

export type SocialMediaLink = {
	id: number
	social_media_platform: SocialMediaPlatform
	url: string
	is_active: boolean
}

export enum SocialMediaPlatform {
	FACEBOOK = "facebook",
	INSTAGRAM = "instagram",
	X = "x",
	LINKEDIN = "linkedin",
	YOUTUBE = "youtube",
	PINTEREST = "pinterest",
}

type RestaurantState = {
	restaurantId: number | null
	restaurantName: string | null
	restaurantDomain: string | null
	restaurantLogo: string | null
	restaurantCustomLinks: CustomLink[]
	restaurantSocialMediaLinks: SocialMediaLink[]
}

type RestaurantAction = {
	setRestaurant: (
		id: number | null,
		name: string | null,
		domain: string | null,
		logo: string | null,
		customLinks: CustomLink[],
		socialMediaLinks: SocialMediaLink[]
	) => void
}

export const useRestaurantStore = create<RestaurantState & RestaurantAction>(
	(set) => ({
		restaurantId: null,
		restaurantName: null,
		restaurantDomain: null,
		restaurantLogo: null,
		restaurantCustomLinks: [],
		restaurantSocialMediaLinks: [],
		setRestaurant: (id, name, domain, logo, customLinks, socialMediaLinks) =>
			set(() => ({
				restaurantId: id,
				restaurantName: name,
				restaurantDomain: domain,
				restaurantLogo: logo,
				restaurantCustomLinks: customLinks || [],
				restaurantSocialMediaLinks: socialMediaLinks || [],
			})),
	})
)
