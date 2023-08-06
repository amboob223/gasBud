// user.js

// User class definition
class User {
    constructor(name, location, photo, gasPay) {
        this.name = name;
        this.location = location;
        this.photo = photo;
        this.gasPay = gasPay;
    }

    // Method for the user to sort through Gassers (optional, not specified in the requirements)
    sort() {
        // Implementation for sorting Gassers based on preferences can be added here
        console.log(`${this.name} is sorting through Gassers.`);
    }

    // Method for the user to pay the Gasser for a completed job
    pay() {
        console.log(`${this.name} is paying the Gasser.`);
        // Implementation to make the payment to the Gasser can be added here
    }
}

// Export the User class for use in other files
export { User };
