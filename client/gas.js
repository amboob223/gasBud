const gasButton = document.getElementById("gbtn");
const gname = document.getElementById("gname");
const glocation = document.getElementById("glocation");
const gbank = document.getElementById("bank");
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