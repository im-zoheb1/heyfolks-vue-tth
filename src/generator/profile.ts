import { faker } from "@faker-js/faker"
import { getFakePost } from "./posts"
import { getFakeFriends } from "./friends"

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
  const data = { 
    ...getProfile(),
    timeline: [],
    friends: getFakeFriends()
  }
  for (let i = 0; i < 10; i++) {
    const post = getFakePost()
    post.avatar = data.avatar
    post.fullname = data.fullname
    post.date = faker.date.recent()
    post.interactions.isLiked = false
    post.interactions.isSaved = false
    data.timeline.push(post)
  }
  return data
}
