import { faker } from '@faker-js/faker'
import { getComments } from './comments';

export const getFakePost = (): any => {
  const fullname: string =  faker.name.fullName();
  const username: string = faker.internet.userName(fullname)
  const avatar: string = faker.image.avatar();
  const date: Date = faker.date.past();
  const content: any = {
    text: faker.lorem.sentences(),
    photo: faker.datatype.boolean() ? faker.image.people(600, 400, true) : null
  }
  const interactions: any = {
    likes: faker.random.numeric(faker.datatype.boolean() ? 2 : 1),
    comments: faker.random.numeric(faker.datatype.boolean() ? 2 : 1),
    isLiked: faker.datatype.boolean(),
    isSaved: faker.datatype.boolean()
  }
  const comments: any[] = getComments()
  return { avatar, fullname, username, date, content, interactions, comments }
}

export const getPosts = (): any =>  {
  const posts = []
  for (let i = 0; i < 25; i++) {
    posts.push(getFakePost())
  }
  return posts
}
