//okay on this page we will import the classes 
//and use there methods along with varibles we get from the dom 
// import { App } from "./classes/app";

//so now we can set it up for user input but is still feel like we can use regex
//these are the variables

// this just puts the varibale we needed 
const ubtn = document.getElementById("ubtn");
const tbody = document.querySelector("tbody")
const uname = document.getElementById("uname");
const ulocation = document.getElementById("ulocation");
const pay = document.getElementById("pay");
const get = document.getElementById("get");
const dbtn = document.getElementById("dbtn");
//start a session 
//first we inintialize a session that will use the addgasser method to fill the form data and we will submit that in the db


//adding a gasser to db 
get.addEventListener("click", async (event) => {
    event.preventDefault()
    try {

        tbody.innerHTML = "";

        const table = document.querySelector("table");
        table.style.display = "table-row-group"

        const data = await fetch("http://localhost:5000/gassers");
        const jsondata = await data.json();//this gives a json object 
        const info = jsondata.rows



        info.forEach((info) => {
            const row = document.createElement("tr");

            const name = document.createElement("td");
            const loc = document.createElement("td");
            const pay = document.createElement("td");

            if (tbody) {

                name.innerHTML = info.name
                loc.innerHTML = info.location
                pay.innerHTML = info.bank

                row.appendChild(name)
                row.appendChild(loc)
                row.appendChild(pay)

                tbody.appendChild(row)

                var isClicked = false;

                row.addEventListener("click", async () => {

                    isClicked = true
                    if (isClicked) {
                        const payPageUrl = `pay.html?name=${encodeURIComponent(info.name)}&location=${encodeURIComponent(info.location)}&bank=${encodeURIComponent(info.bank)}`;

                        // Navigate to the pay.html page
                        window.location.href = payPageUrl;
                    }

                })
            } // so a nested event was the way

            //

        })
    } catch (error) {
        console.log(error)
    }
})

// dbtn.addEventListener("click", async (event) => {

//     try {
//         const body = await fetch("http://localhost:5000/gassers", {
//             method: "DELETE",

//         });

//     } catch (error) {
//         console.log(error.message);
//     }
// })