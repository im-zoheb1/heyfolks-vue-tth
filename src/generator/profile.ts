import { faker } from "@faker-js/faker"

const getProfile = (): any => {
  const cover: string = faker.image.people(900, 600, true)
  const avatar: string = faker.internet.avatar()
  const firstname: string = faker.name.firstName()
  const lastname: string = faker.name.lastName()
  const fullname: string = faker.name.fullName()
  const username: string = faker.internet.userName(firstname, lastname)
  const bio = faker.lorem.sentences(3)
  const city: string = faker.address.city() + ', ' + faker.address.country()

  const connections = { 
    followers: faker.random.numeric(2), 
    following: faker.random.numeric(2)
  }

  return {
    cover,
    avatar,
    fullname,
    username,
    bio,
    connections,
    city
  }
}

export const getFakeProfile = (): any => {
  return { 
    ...getProfile()
  }
}
