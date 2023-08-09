//okay on this page we will import the classes 
//and use there methods along with varibles we get from the dom 
// import { App } from "./classes/app";

//so now we can set it up for user input but is still feel like we can use regex
//these are the variables

document.addEventListener("DOMContentLoaded", () => {
    const gasButton = document.getElementById("gbtn");
    const gname = document.getElementById("gname");
    const glocation = document.getElementById("glocation");
    const gbank = document.getElementById("bank");

    const ubtn = document.querySelector("ubtn");

    const uname = document.getElementById("uname");
    const ulocation = document.getElementById("ulocation");
    const pay = document.getElementById("pay");


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

        } catch (error) {
            console.log(error.message)
        }

    })


    //start a session 
    //first we inintialize a session that will use the addgasser method to fill the form data and we will submit that in the db


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
})

