import { faker } from "@faker-js/faker"

export const getFakeFriend = (): any => {
  const gender: string = faker.name.sex()
  const firstname: string = faker.name.firstName(gender === "male" ? "male" : "female")
  const lastname: string = faker.name.lastName(gender === "male" ? "male" : "female")
  const fullname: string = firstname + ' ' + lastname
  const username: string = faker.internet.userName(firstname, lastname)
  const avatar: string = faker.image.avatar()
  const city: string = faker.address.city() + ', ' + faker.address.country()
  const bio: string = faker.lorem.paragraph()
  const followers = faker.random.numeric(2)
  const following = faker.random.numeric(2)

  return { 
    avatar, 
    firstname, 
    lastname, 
    fullname,
    gender, 
    username, 
    city, 
    bio,
    followers,
    following
  }
}

export const getFakeFriends = (): any[] => {
  const friends = []
  for (let i = 0; i < 30; i++) {
    friends.push(getFakeFriend())
  }
  return friends
}
