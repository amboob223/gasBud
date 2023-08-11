// in the app class will will get the pay method and increse the bank for the gasser
// // the two varibles will be the gasser and users array which is an arry of instances 
// we will import the other methods into this one 
//will have the sort method 
//and the make payment buttob, 

const ubtn = document.getElementById("ubtn")
const uname = document.getElementById("uname");
const ulocation = document.getElementById("ulocation");
const pay = document.getElementById("pay");

class App {


    constructor() {
        this.gassers = [],
            this.users = []

    }
    //method
    //user
    addUser(name, location, pay) {
        const user = new User(name, location, pay);

        this.users.push(user)
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

    // App.addUser(uname.innerHTML,ulocation.innerHTML,pay.innerHTML)


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

}



exports = {App};