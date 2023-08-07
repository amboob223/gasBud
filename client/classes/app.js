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
        const gasser = this.gassers.find(gasser => gasser.name === gasserName)
        if (!gasser) {
            console.log(`we did not see gasser name `)
        }

        gasser.receivePay(amount);
        console.log(`${gasser.bank}`)
    }

    addGasser(name, location, bank) {
        const gasser = new Gasser(name, location, bank);
        this.gassers.push(gasser)
        console.log(`here is the ${gasser.name}`)
    }



}


//make an instance of a gasser and user 
const gasser1 = new Gasser("Monk", "university", 0)
const user1 = new User("you mama", "decatur", 23)
console.log(gasser1.recievePay(23))
console.log(gasser1.bank)











// // app.js

// // Import the User and Gasser classes (assuming they are defined in separate files)
// import { User } from './user';
// import { Gasser } from './gasser';

// // App class definition
// class App {
//     constructor() {
//         this.users = [];
//         this.gassers = [];
//     }

//     // Method to add a new user to the app
//     addUser(name, location, photo, gasPay) {
//         const user = new User(name, location, photo, gasPay);
//         this.users.push(user);
//         console.log(`New user ${name} added.`);
//     }

//     // Method to add a new gasser to the app
//     addGasser(name, location, photo, bank) {
//         const gasser = new Gasser(name, location, photo, bank);
//         this.gassers.push(gasser);
//         console.log(`New gasser ${name} added.`);
//     }

//     // Method to sort gassers by distance from a given location (optional, not specified in the requirements)
//     sortGassersByDistance(location) {
//         // Implementation for sorting gassers by distance can be added here
//         console.log(`Sorting gassers based on distance from ${location}.`);
//         return this.gassers; // Placeholder return statement for the example
//     }

//     // Method for the user to pay the gasser for a completed job
//     payGasser(gasser, amount) {
//         console.log(`Paying ${gasser.name} $${amount}.`);
//         // Implementation for making the payment to the gasser can be added here
//     }

//     // Method for the user to request a gasser
//     requestGasser(user) {
//         // Implementation to put the user in a queue to request a gasser can be added here
//         console.log(`${user.name} requests a gasser.`);
//     }
// }

// // Export the App class for use in other files
// export { App };
