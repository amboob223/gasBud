// in the app class will will get the pay method and increse the bank for the gasser
// // the two varibles will be the gasser and users array which is an arry of instances 
// we will import the other methods into this one 
//will have the sort method 
//and the make payment buttob, 


// import { Gasser } from "./gasser"; // we had to deconstruct gasser class from the file 
// import { User } from "./user";

class App {
    //if i nest this constructor or do inheritence can that help main tain the state and score of shou I use a databse with http 
    // good question above
    constructor() {
        this.gassers = [],
            this.users = []

    }

    //method
    //user
    addUser(name, location, pay) {
        const user = new User(name, location, pay);

        this.users.push(user.toString());
        console.log(`we pushed ${user.name} to the console.`)
    }
    //make a payment 
    makePay(gasserName, amount) {

        try {
            const gasser = this.gassers.find(gasser => gasser.name === gasserName)
            if (!gasser) {
                console.log(`we did not see gasser name `)
            }

            gasser.receivePay(amount);
            console.log(`${gasser.bank}`)
        } catch (error) {
            console.log(error)
        }
    }

    addGasser(name, location, bank) {
        const gasser = new Gasser(name, location, bank);
        this.gassers.push(gasser.toString())
        console.log(`here is the ${gasser.name}`)
    }



}

class Gasser {
    constructor(name, location, bank) {
        this.name = name,
            this.location = location,
            this.bank = bank // these are getters
    }

    receivePay(pay) {
        this.bank += pay
        return this.bank
    }
    toString() {
        return `${this.name} - Location: ${this.location} - Bank: ${this.bank}`;
    }
}

class User {
    constructor(name, location, pay) {
        this.name = name;
        this.location = location;
        this.pay = pay;
    }

    toString() {
        return `${this.name} - Location: ${this.location} - Bank: ${this.pay}`;
    }

}
exports = { App };