
// localStorage

const profile = {
    name: "Rahul",
    email: "rahul@gmail.com"
}

const data = JSON.stringify(profile)

const setData = () => {
    localStorage.setItem("user", data)
    localStorage.setItem("users", data)
}

const getData = () => {
    let user = localStorage.getItem("user")
    let profile = JSON.parse(user)
    console.log(profile);
    document.getElementById("name").innerText = profile.name
    document.getElementById("email").innerText = profile.email
}


const removeData = () => {
    localStorage.removeItem("user")
}

const clearData = () => {
    localStorage.clear()
}

// sessionStorage

let SecretKey = "HusssbJHBAHS5454"

let key = JSON.stringify(SecretKey)

const sessionSetData = () => {
    sessionStorage.setItem("auth", key)
}
