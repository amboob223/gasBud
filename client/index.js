// Importing the required classes (assume you have them defined in separate files)
import { App } from './classes/app';
import { User } from '.classes/user';
import { Gasser } from './classes/gasser';

// Create an instance of the App class
const gasBudApp = new App();

// Add users and gassers to the app
gasBudApp.addUser('User1', 'Location1', 'user1_photo.jpg');
gasBudApp.addUser('User2', 'Location2', 'user2_photo.jpg');

gasBudApp.addGasser('Gasser1', 'LocationA', 'gasser1_photo.jpg', 'BankA');
gasBudApp.addGasser('Gasser2', 'LocationB', 'gasser2_photo.jpg', 'BankB');

// Get the user's location (you can get it using user's device location or prompt the user)
const userLocation = 'User1_Location'; // Assuming this is the location of the first user

// Sort Gassers by distance from the user
const sortedGassers = gasBudApp.sortGassersByDistance(userLocation);

// Request a Gasser from the first user
gasBudApp.requestGasser(gasBudApp.users[0]);

// Gasser1 accepts the job from the user queue
gasBudApp.gassers[0].acceptJob(gasBudApp.users[0]);

// Gasser1 concludes the job and gets paid
gasBudApp.gassers[0].concludeJob();

// The user pays Gasser1 for the completed job
gasBudApp.payGasser(gasBudApp.gassers[0], gasBudApp.users[0].gasPay);
