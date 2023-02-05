import { faker } from "@faker-js/faker"

export const getFakeNotification = (): any => {
  const sex: any = faker.name.sex();
  const name: string = faker.name.fullName({ sex })
  const avatar: string = faker.image.avatar();
  return { name, avatar }
}

export const getNotifications = (): any => {
  const notifications = []
  notifications.unshift({
    ...getFakeNotification(),
    type: 'text',
    date: faker.date.past(),
    comment: 'commented on your post.',
    isNew: false
  })
  notifications.unshift({
    ...getFakeNotification(),
    type: 'follow-request',
    date: faker.date.past(),
    comment: 'has requested to follow you.',
    isNew: true
  })
  notifications.unshift({
    ...getFakeNotification(),
    type: 'text',
    date: faker.date.past(),
    comment: 'has liked your post.',
    isNew: true
  })
  return notifications
}
