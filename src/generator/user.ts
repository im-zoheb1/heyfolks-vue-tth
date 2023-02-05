import { faker } from "@faker-js/faker";

const gender: string = faker.name.sex();
const firstname: string = faker.name.firstName(gender === "male" ? "male" : "female");
const lastname: string = faker.name.lastName(gender === "male" ? "male" : "female");
const username: string = faker.internet.userName(firstname, lastname);
const avatar: string = faker.image.avatar();

export const getUserData = (): any => {
  return {
    gender,
    avatar,
    username,
    get fullname() {
      return firstname + ' ' + lastname 
    }
  }
}
