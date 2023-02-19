import { faker } from "@faker-js/faker";

export const getFakeData = (): any => {
  const sex: any = faker.name.sex();
  const name: string = faker.name.fullName({ sex })
  const avatar: string = faker.image.avatar();
  const message: string = faker.lorem.words(+faker.random.numeric())
  const date: Date  = faker.date.past()
  return { name, avatar, message, date }
}

export const getMessages = (): any => {
  const messages = []
  for (let i = 0; i < 20; i++) {
    const unread: number = i < 1 ? +faker.random.numeric() : 0
    messages.push({ ...getFakeData() , unread })
  }
  return messages
}
