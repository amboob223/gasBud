// gasser.js

// Gasser class definition
class Gasser {
    constructor(name, location, photo, bank) {
        this.name = name;
        this.location = location;
        this.photo = photo;
        this.bank = bank;
        this.isJobAccepted = false; // A flag to track if a job is accepted
    }

    // Method to accept a job from the user queue
    acceptJob(user) {
        if (this.isJobAccepted) {
            console.log(`Job already accepted by ${this.name}.`);
        } else {
            console.log(`${this.name} accepts the job from ${user.name}.`);
            this.isJobAccepted = true;
        }
    }

    // Method to conclude the job and mark it as completed
    concludeJob() {
        if (!this.isJobAccepted) {
            console.log(`${this.name} has no job to conclude.`);
        } else {
            console.log(`${this.name} concludes the job.`);
            this.isJobAccepted = false;
        }
    }
}

// Export the Gasser class for use in other files
export { Gasser };
