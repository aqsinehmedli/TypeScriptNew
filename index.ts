
interface PersonProperties{
    name:string;
    surname:string;
    email:string;
    password:string;
}
class Person{
    public name:string;
    public surname:string;
    protected email:string;
    private password:string;


    constructor(personProp:PersonProperties) {
        this.name = personProp.name;
        this.surname = personProp.surname;
        this.email = personProp.email;
        this.password = personProp.password;
    }
    getInfo():string{
        return `Hello My name is ${this.name}\n,My surname is ${this.surname}\nMy email is ${this.email}\n My password ${this.password}`
    }
    changeEmail(newEmail:string){
        this.email = newEmail
    }
}

const PersonData:PersonProperties = {
    name: "Aqshin",
    surname: "Ahmadli",
    email: "example@example.com",
    password: "12345"
}

const  person = new Person(PersonData);
console.log(person.getInfo())
console.log(person.changeEmail("aqsinhmdli03@gmail.com"))
console.log(person.getInfo())