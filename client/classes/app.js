// in the app class will will get the pay method and increse the bank for the gasser
// // the two varibles will be the gasser and users array which is an arry of instances 
// we will import the other methods into this one 
//will have the sort method 
//and the make payment buttob, 


const { Gasser } = require("./gasser"); // we had to deconstruct gasser class from the file 
const { User } = require("./user");

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
        this.gassers.push(gasser)
        console.log(`here is the ${gasser.name}`)
    }



}


exports = { App };