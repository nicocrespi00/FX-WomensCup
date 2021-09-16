const API_URL = "https://localhost:44319"
const HTMLResponseNewPlayers = document.querySelector("#TeamNewPlayer")

const formPlayer = document.getElementById('newPlayerForm')
formPlayer.addEventListener("submit", function(event){
    event.preventDefault()
    let newPlayerFormData = new FormData(formPlayer)
    let newPlayerName = newPlayerFormData.get("NameNewPlayer")
    let newPlayerSurname = newPlayerFormData.get("SurnameNewPlayer")
    let newPLayerDni = newPlayerFormData.get("DniNewPlayer")
    let newPLayerTeam = newPlayerFormData.get("TeamNewPlayer")
    let numNewPlayerTeam = parseInt(newPLayerTeam)
    PostPlayer(newPlayerName, newPlayerSurname, newPLayerDni, numNewPlayerTeam)
    setTimeout(function(){window.location.href = "inscripts.html"; }, 2000)
}
)

function ShowNameTeams() {
    fetch(`${API_URL}/api/Equipos`)
    .then(response => response.json())
    .then(Equipos => {
        const tpl = Equipos.map(Equipo => `<option value="${Equipo.Id}">${Equipo.NombreEquipo}</option>`) 
        HTMLResponseNewPlayers.innerHTML = `${tpl}`
            }
        );
}

function PostPlayer(newPlayerName, newPlayerSurname, newPLayerDni, newPLayerTeam){
    var url = 'https://localhost:44319/api/Jugadoras';
    var data = {Nombre: `${newPlayerName}`, Apellido: `${newPlayerSurname}`, NroDocumento: `${newPLayerDni}`, IdEquipo: newPLayerTeam};

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
        'Content-Type': 'application / json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}

