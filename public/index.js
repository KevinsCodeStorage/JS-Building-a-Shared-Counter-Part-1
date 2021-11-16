const users_url = 'https://60d23844858b410017b2d60b.mockapi.io/users'
async function getUsers(){
    let response = await fetch(users_url)
    let data = await response.json()

    let user_table = document.querySelector("#user-table > tbody")
    console.log(user_table)
    for (let index = 0; index < data.length; index++) {
        let trow = document.createElement("tr")
        
    }
    
}

const vehicles_url = 'https://60d23844858b410017b2d60b.mockapi.io/vehicles'
async function getVehicles() {
    let response = await fetch(vehicles_url)
    let data = await response.json()

    let vehicle_table = document.querySelector("#vehicle-table > tbody")
    console.log(vehicle_table)
    for (let index = 0; index < data.length; index++) {
        let trow = document.createElement("tr")
        
    }
}

//page loaded
getUsers()
getVehicles()