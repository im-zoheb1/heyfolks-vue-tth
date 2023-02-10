import { faker } from "@faker-js/faker"

export const getFakeComment = (level: number = 0): any => {
  const fullname: string = faker.name.fullName()
  const avatar: string = faker.internet.avatar()
  const date: Date = faker.date.past();
  const text: any = faker.lorem.sentence()
  const responses: any[] = []
  if (faker.datatype.boolean() && level === 0) {
    const loopCount: number = Math.floor(Math.random() * 4)
    for (let i = 0; i < loopCount; i++) {
      responses.push(getFakeComment(level + 1))
    }
  }

  return {
    fullname,
    avatar,
    date,
    text,
    responses
  }
}

export const getComments = (): any => {
  const comments = []
  for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
    comments.push(getFakeComment())
  }
  return comments
}
