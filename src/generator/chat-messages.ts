import { faker } from "@faker-js/faker"

export const getChat = () => {
  const messages = []
  let sender = {
    id: 1,
    name: faker.name.fullName(),
    avatar: faker.internet.avatar()
  }
  let recipient = {
    id: 2,
    name: faker.name.fullName(),
    avatar: faker.internet.avatar()
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
