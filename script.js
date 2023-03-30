let username = document.querySelector("#username")
let getprofile = document.querySelector("#getprofile")
let profilehtml = document.querySelector("#profilecard")
let choosebutton = document.querySelector(".choose")
let repospace = document.querySelector(".repospace")
let dropdowncontent = document.querySelector(".dropdowncontent")
let stars = document.querySelector("#stars")
let fork = document.querySelector("#folks")
let size = document.querySelector("#size")
let errormes = document.querySelector(".errormessage")

let dropdown = document.querySelector(".dropdown")
getprofile.addEventListener('click', () => {
    refresh()
    getdata(username.value)
    getrepos(username.value)
})
function getdata(val) {
    let req = fetch(`https://api.github.com/users/${val}`)
        .then((resp) => {
            return resp
        })
        .then((data) => {
            if (data.status > 400 && data.status < 500) {
                errormes.innerHTML = "Data not Found!"
            }
            else {
                errormes.innerHTML = ""
                return data.json()
            }
        })
        .then((obj) => {
            showprofile(obj)
        })
}

function showprofile(data) {
    profilehtml.innerHTML =
        `<div class='profile'>
        <img src=${data.avatar_url} alt="" class="dp">
        <div class="profinfo">
            <h2 class="profinfoitems" id="profilename">${data.name}</h2>
            <h2 class="profinfoitems" id="profileid">${data.login}</h2>
            <h2 class="profinfoitems" id="discription">${data.bio}</h2>
            <h2 class="profinfoitems" id="following">${data.following} following ${data.followers} followers</h2>
            <a href=${data.html_url}><button class="checkprof">Check Profile</button></a>
        </div>
    </div>
    `
}
choosebutton.addEventListener('click', () => {
    dropdowncontent.style.visibility = "visible"
    dropdowncontent.style.height = "120px"
})
dropdowncontent.addEventListener("click", () => {
    dropdowncontent.style.visibility = "hidden"
    dropdowncontent.style.height = "0px"
})
function refresh() {
    repospace.innerHTML = ""
    if (errormes.innerHTML == '') {
        dropdown.style.visibility = 'visible'
    }
    profilehtml.innerHTML = ''

}
async function getrepos(val) {
    let req = await fetch(`https://api.github.com/users/${val}/repos`)
    let resp = await req.json()
    if (req.status > 400 && req.status < 500) {
        errormes.innerHTML = "Data not Found!"
    }
    else {
        for (let i = 0; i < resp.length; i++) {
            repospace.innerHTML +=
                `<div class="repodiv">
                <h1 id="reponame">${resp[i].name}</h3>
                <h3 id="repolang">${resp[i].language}</h4>
            <a href="${resp[i].html_url}"> <button class="linkrepo">Check out Project</button></a>
                <div class="stats">
                    <p class="stars">Stars ${resp[i].stargazers_count}</p>
                    <p class="folks">Forks ${resp[i].forks_count}</p>
                    <p class="size">Size ${resp[i].size}</p>
                </div>
            </div>`
        }
    }
}
stars.addEventListener('click', async () => {
    repospace.innerHTML = ""
    let req = await fetch(`https://api.github.com/users/${username.value}/repos`)
    let resp = await req.json()
    if (req.status > 400 && req.status < 500) {
        errormes.innerHTML = "Data not Found!"
    }
    else {
        resp.sort((a, b) => { return b.stargazers_count - a.stargazers_count })
        for (let i = 0; i < resp.length; i++) {
            repospace.innerHTML +=
                `<div class="repodiv">
                <h1 id="reponame">${resp[i].name}</h3>
                <h3 id="repolang">${resp[i].language}</h4>
            <a href="${resp[i].html_url}"> <button class="linkrepo">Check out Project</button></a>
                <div class="stats">
                    <p class="stars">Stars ${resp[i].stargazers_count}</p>
                    <p class="folks">Forks ${resp[i].forks_count}</p>
                    <p class="size">Size ${resp[i].size}</p>
                </div>
            </div>`
        }
    }
})
folks.addEventListener('click', async () => {
    repospace.innerHTML = ""
    let req = await fetch(`https://api.github.com/users/${username.value}/repos`)
    let resp = await req.json()
    if (req.status > 400 && req.status < 500) {
        errormes.innerHTML = "Data not Found!"
    }
    else {
        resp.sort((a, b) => { return b.forks_count - a.forks_count })
        for (let i = 0; i < resp.length; i++) {
            repospace.innerHTML +=
                `<div class="repodiv">
                <h1 id="reponame">${resp[i].name}</h3>
                <h3 id="repolang">${resp[i].language}</h4>
            <a href="${resp[i].html_url}"> <button class="linkrepo">Check out Project</button></a>
                <div class="stats">
                    <p class="stars">Stars ${resp[i].stargazers_count}</p>
                    <p class="folks">Forks ${resp[i].forks_count}</p>
                    <p class="size">Size ${resp[i].size}</p>
                </div>
            </div>`
        }
    }
})
size.addEventListener('click', async () => {
    repospace.innerHTML = ""
    let req = await fetch(`https://api.github.com/users/${username.value}/repos`)
    let resp = await req.json()
    if (req.status > 400 && req.status < 500) {
        errormes.innerHTML = "Data not Found!"
    }
    else {
        resp.sort((a, b) => { return b.size - a.size })
        for (let i = 0; i < resp.length; i++) {
            repospace.innerHTML +=
                `<div class="repodiv">
                <h1 id="reponame">${resp[i].name}</h3>
                <h3 id="repolang">${resp[i].language}</h4>
            <a href="${resp[i].html_url}"> <button class="linkrepo">Check out Project</button></a>
                <div class="stats">
                    <p class="stars">Stars ${resp[i].stargazers_count}</p>
                    <p class="folks">Forks ${resp[i].forks_count}</p>
                    <p class="size">Size ${resp[i].size}</p>
                </div>
            </div>`
        }
    }
})