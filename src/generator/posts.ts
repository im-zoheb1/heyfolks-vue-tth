import { faker } from '@faker-js/faker'
import { getComments } from './comments';

/* const getResponsesCount = (responses: any[], count: number = 0, index: number = 0): any => {
  if (!responses.length) return count
} */
function countComment(comments: any): number {
  let count: number = 0
  for (let comment of comments) {
    count = count + 1
    count += countComment(comment.responses)
  }
  return count
}

export const getFakePost = (): any => {
  const fullname: string =  faker.name.fullName();
  const username: string = faker.internet.userName(fullname)
  const avatar: string = faker.image.avatar();
  const date: Date = faker.date.recent();
  const content: any = {
    text: faker.lorem.sentences(),
    photo: faker.datatype.boolean() ? faker.image.people(600, 400, true) : null
  }
  const responses: any[] = getComments()
  const interactions: any = {
    likes: faker.random.numeric(faker.datatype.boolean() ? 2 : 1),
    comments: countComment(responses),
    isLiked: faker.datatype.boolean(),
    isSaved: faker.datatype.boolean()
  }
  return { avatar, fullname, username, date, content, responses, interactions }
}

export const getPosts = (): any =>  {
  const posts = []
  for (let i = 0; i < 25; i++) {
    posts.push(getFakePost())
  }
  return posts
}
