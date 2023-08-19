const gasButton = document.getElementById("gbtn");
const gname = document.getElementById("gname");
const glocation = document.getElementById("glocation");
const gbank = document.getElementById("bank");
const gbtn = document.getElementById("bn");
const tbody = document.querySelector("tbody")
const dbtn = document.getElementById("dbtn");
//adding a gasser to db 


gbtn.addEventListener("click", async (event) => {
    event.preventDefault();
    try {
        tbody.innerHTML = "";
        const table = document.querySelector("table");
        table.style.display = "table-row-group"
        const body = await fetch("http://localhost:5000/users");
        const jbody = await body.json();
        const arra = jbody.rows

        arra.forEach((info) => {

            const row = document.createElement("tr");
            row.classList.add("bd");
            const name = document.createElement("td");
            const location = document.createElement("td");
            const bank = document.createElement("td");

            name.innerHTML = info.name,
                location.innerHTML = info.location,
                bank.innerHTML = info.pay

            row.appendChild(name);
            row.appendChild(location);
            row.appendChild(bank)

            tbody.appendChild(row)




        })

    } catch (error) {
        console.log(error.message)
    }
})

// dbtn.addEventListener("click", async (event) => {

//     try {
//         const body = await fetch("http://localhost:5000/users", {
//             method: "DELETE",

//         });

//     } catch (error) {
//         console.log(error.message);
//     }
// })


