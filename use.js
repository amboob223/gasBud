//okay on this page we will import the classes 
//and use there methods along with varibles we get from the dom 
    // import {App} from "./classes/app.js";
// import { Gasser } from "./classes/gasser.js";
// import { User } from "./classes/user.js";

//so now we can set it up for user input but is still feel like we can use regex
//these are the variables

const ubtn = document.getElementById("ubtn")
const uname = document.getElementById("uname");
const ulocation = document.getElementById("ulocation");
const pay = document.getElementById("pay");
//post

ubtn.addEventListener("click", async (event) => {
    event.preventDefault();
    try {
        const body = {
            name: uname.value,
            location: ulocation.value,
            pay: pay.value
        };
        const response = await fetch("http://localhost:5000/users", {
            headers: { "Content-type": "Application/json" },
            method: "POST",
            body: JSON.stringify(body)//json interfacce works with some class and we get strinngify which takes a objectc parameter an makes a object
        })
alert("okay we got you");
    } catch (error) {
        console.log(error.message)
    }

})


//start a session 
//first we inintialize a session that will use the addgasser method to fill the form data and we will submit that in the db


//adding a gasser to db 


