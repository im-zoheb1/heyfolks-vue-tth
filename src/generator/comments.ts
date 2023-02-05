import { faker } from "@faker-js/faker"

export const getFakeresponses = (): any => {
  const responses: any[] = []
  if (faker.datatype.boolean()) {
    const loopCount: number = Math.floor(Math.random() * 4)
  }
  return responses
}

export const getFakeComment = (): any => {
  const fullname: string = faker.name.fullName()
  const avatar: string = faker.internet.avatar()
  const date: Date = faker.date.past();
  const text: any = faker.lorem.sentence()
  const responses: any[] = []
  if (faker.datatype.boolean()) {
    const loopCount: number = Math.floor(Math.random() * 3)
    for (let i = 0; i < loopCount; i++) {
      responses.push(getFakeComment())
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
