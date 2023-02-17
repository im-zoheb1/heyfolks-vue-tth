import { faker } from "@faker-js/faker"

export const getFakeFriend = (): any => {
  const gender: string = faker.name.sex();
  const firstname: string = faker.name.firstName(gender === "male" ? "male" : "female");
  const lastname: string = faker.name.lastName(gender === "male" ? "male" : "female");
  const username: string = faker.internet.userName(firstname, lastname);
  const avatar: string = faker.image.avatar();
  const profession: string = faker.name.jobTitle()
  const bio: string = faker.lorem.paragraph()

  return { 
    avatar, 
    firstname, 
    lastname, 
    gender, 
    username, 
    profession, 
    bio 
  }
}

export const getFakeFriends = (): any[] => {
  const friends = []
  for (let i = 0; i < 30; i++) {
    friends.push(getFakeFriend())
  }
  return friends
}
