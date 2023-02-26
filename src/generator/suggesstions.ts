import { faker } from "@faker-js/faker"

export const getFakeSuggesstion = (): any => {
	const avatar = faker.image.avatar()
	const fullname = faker.name.fullName()
	const bio = faker.lorem.sentence()
	return { avatar, fullname, bio }
}

export const getFakeSuggesstions = (): any[] => {
	const suggesstions = [];
	for (let i = 0; i < 3; i++) suggesstions.push(getFakeSuggesstion())
	return suggesstions
}
