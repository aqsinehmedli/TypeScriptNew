"use strict";
class Person {
    constructor(personProp) {
        this.name = personProp.name;
        this.surname = personProp.surname;
        this.email = personProp.email;
        this.password = personProp.password;
    }
    getInfo() {
        return `Hello My name is ${this.name}\n,My surname is ${this.surname}\nMy email is ${this.email}\n My password ${this.password}`;
    }
    changeEmail(newEmail) {
        this.email = newEmail;
    }
}
const PersonData = {
    name: "Aqshin",
    surname: "Ahmadli",
    email: "example@example.com",
    password: "12345"
};
const person = new Person(PersonData);
console.log(person.getInfo());
console.log(person.changeEmail("aqsinhmdli03@gmail.com"));
console.log(person.getInfo());
