const API_URL = "https://localhost:44319"

const formTeam = document.getElementById('newTeamForm')
formTeam.addEventListener("submit", function(event){
    event.preventDefault()
    let newTeamFormData = new FormData(formTeam)
    let newTeamName = newTeamFormData.get("NameNewTeam")
    let newTeamColor = newTeamFormData.get("ColorNewTeam")
    PostTeam(newTeamName, newTeamColor)
    setTimeout(function(){window.location.href = "inscripts.html"; }, 2000)
}
)

function PostTeam(nameNewTeam, colorNewTeam){
    var url = 'https://localhost:44319/api/Equipos';
    var data = {NombreEquipo: `${nameNewTeam}`, ColorEquipo: `${colorNewTeam}`};

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data), 
        headers:{
        'Content-Type': 'application / json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}

