// this is a class that will have a few methods and attributes to indicate a new user
// in the app thats where will make the instances of a gasser and a user 
// some of the attributes for a user is . name,pay,vehicle,photo
// some of the methods are:

// submiting a name which is putting the info in the server.
// the paynenbt method that changes the account of the gasser.
// there will also on the gasser side.
class User {
    constructor(name, location, pay) {
        this.name = name;
        this.location = location;
        this.pay = pay;
    }

}

Module.exports = { User };