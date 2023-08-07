// gasser.js
//this will be the gasser class it will take in a name a location and a bank pramenter
//the the method is 
//accepting the payment which increases the bank by the users.pay 
//
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
}

module.exports = { Gasser };