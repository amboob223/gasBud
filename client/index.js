//okay on this page we will import the classes 
//and use there methods along with varibles we get from the dom 
const { App } = require("./classes/app");
const { Gasser } = require("./classes/gasser");
const { User } = require("./classes/user");

//so now we can set it up for user input but is still feel like we can use regex
//these are the variables
const gasButton = document.getElementById("gbtn");
const gname = document.getElementById("gname");
const glocation = document.getElementById("glocation");
const gbank = document.getElementById("bank")

const ubtn = document.getElementById("ubtn")
const uname = document.getElementById("uname");
const ulocation = document.getElementById("ulocation");
const pay = document.getElementById("pay");

//adding a gasser to db 
gasButton.addEventListener("click", async (event) => {
    event.preventDefault()
    try {
        const body = {
            name: gname.value,
            location: glocation.value,
            bank: gbank.value
        }
        const response = await fetch("http://localhost:5000/gassers", {
            method: "POST",
            headers: { "Content-type": "Application/json" },
            body: JSON.stringify(body)
        })

        gname.value = ""
        glocation.value = ""
        gbank.value = ""

        alert("we got you big dawg")

    } catch (error) {
        console.log(error.message)
    }
})

