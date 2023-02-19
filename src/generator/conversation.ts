import { faker } from "@faker-js/faker"

export const getChat = () => {
  const messages = []
  let sender = {
    id: 1,
    avatar: faker.internet.avatar(),
    name: faker.name.fullName(),
    get username() {
      return faker.internet.userName(...sender.name.split(' '))
    },
  }
  let recipient = {
    id: 2,
    avatar: faker.internet.avatar(),
    name: faker.name.fullName(),
    get username() {
      return faker.internet.userName(...recipient.name.split(' '))
    },
  }
  const userInfo = recipient
  for (let i = 0; i < 20; i++) {
    if (faker.datatype.boolean()) {
      [recipient, sender] = [sender, recipient]
    }
    messages.push({ 
      sender, 
      recipient,
      content: faker.lorem.sentence(),
      timestamp: faker.date.recent(),
    })
  }
  return { userInfo, messages }
}
