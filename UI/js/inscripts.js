const API_URL = "https://localhost:44319"
const HTMLResponseTeam = document.querySelector("#teams")
const HTMLResponsePlayers = document.querySelector("#players")

function ShowTeams() {
    fetch(`${API_URL}/api/Equipos`)
    .then(response => response.json())
    .then(Equipos => {
        const tpl = Equipos.map(Equipo => `<tr><td>${Equipo.NombreEquipo}</td><td>${Equipo.ColorEquipo}</td><td id="SeePlayers"><a href="#players"><button onclick="ShowPlayers(${Equipo.Id}, '${Equipo.NombreEquipo}')" class="playerbutton">Ver</button></a></td></tr>`)
        
            HTMLResponseTeam.innerHTML = 
            `
            <table>
            <caption>Equipos</caption>
            <tbody>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Color</th>
                        <th>Jugadoras</th>
                    </tr>
                </thead>
                    ${tpl}
            </tbody>
            </table>
            `
            }
        );
}

function ShowPlayers(IdTeam, teamName) {
    fetch(`${API_URL}/api/Equipos`)
    .then(response => response.json())
    .then(Equipos => {
        const tpl = Equipos[IdTeam-1].Jugadoras.map(jugadora => `<tr><td>${jugadora.Nombre}</td><td>${jugadora.Apellido}</td><td>${jugadora.NroDocumento}</td></tr>`)
        
            HTMLResponsePlayers.innerHTML = 
            `
            <table>
            <caption>${teamName}</caption>
            <tbody>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Documento</th>
                    </tr>
                </thead>
                    ${tpl}
            </tbody>
            </table>
            `
            }
        );
}

