const apiKey = 'fd0a8dbb8b157f54a8444e8fdda712d0'; 
let divTimes = document.getElementById("teams")

function mostrarClassificacao(){
$('#anoSelect').on('change', function() {
    divTimes.innerHTML = ""
    const anoSelecionado = $(this).val();
    fetch(`https://v3.football.api-sports.io/standings?league=71&season=${anoSelecionado}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": apiKey
	}
    })
    .then(response => {
        return response.json()
    })
    .then(resposta => {
        let times = resposta.response[0].league.standings[0]
        divTimes.innerHTML += `
        <table class="responsive-table highlight" style="width: 60vw;">
        <thead>
            <tr>
                <th>Colocação</th>
                <th>Escudo</th>
                <th>Nome</th>
                <th>Pontuação</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>${times[0].rank}</td>
            <td><img src="${times[0].team.logo}" style="width: 4vw"></td>
            <td>${times[0].team.name}</td>
            <td>${times[0].points}</td>
          </tr>
          <tr>
            <td>${times[1].rank}</td>
            <td><img src="${times[1].team.logo}" style="width: 4vw"></td>
            <td>${times[1].team.name}</td>
            <td>${times[1].points}</td>
          </tr>
          <tr>
            <td>${times[2].rank}</td>
            <td><img src="${times[2].team.logo}" style="width: 4vw"></td>
            <td>${times[2].team.name}</td>
            <td>${times[2].points}</td>
          </tr>
          <tr>
            <td>${times[3].rank}</td>
            <td><img src="${times[3].team.logo}" style="width: 4vw"></td>
            <td>${times[3].team.name}</td>
            <td>${times[3].points}</td>
          </tr>
          <tr>
            <td>${times[4].rank}</td>
            <td><img src="${times[4].team.logo}" style="width: 4vw"></td>
            <td>${times[4].team.name}</td>
            <td>${times[4].points}</td>
          </tr>
          <tr>
            <td>${times[5].rank}</td>
            <td><img src="${times[5].team.logo}" style="width: 4vw"></td>
            <td>${times[5].team.name}</td>
            <td>${times[5].points}</td>
          </tr>
          <tr>
            <td>${times[6].rank}</td>
            <td><img src="${times[6].team.logo}" style="width: 4vw"></td>
            <td>${times[6].team.name}</td>
            <td>${times[6].points}</td>
          </tr>
          <tr>
            <td>${times[7].rank}</td>
            <td><img src="${times[7].team.logo}" style="width: 4vw"></td>
            <td>${times[7].team.name}</td>
            <td>${times[7].points}</td>
          </tr>
          <tr>
            <td>${times[8].rank}</td>
            <td><img src="${times[8].team.logo}" style="width: 4vw"></td>
            <td>${times[8].team.name}</td>
            <td>${times[8].points}</td>
          </tr>
          <tr>
            <td>${times[9].rank}</td>
            <td><img src="${times[9].team.logo}" style="width: 4vw"></td>
            <td>${times[9].team.name}</td>
            <td>${times[9].points}</td>
          </tr>
          <tr>
            <td>${times[10].rank}</td>
            <td><img src="${times[10].team.logo}" style="width: 4vw"></td>
            <td>${times[10].team.name}</td>
            <td>${times[10].points}</td>
          </tr>
          <tr>
            <td>${times[11].rank}</td>
            <td><img src="${times[11].team.logo}" style="width: 4vw"></td>
            <td>${times[11].team.name}</td>
            <td>${times[11].points}</td>
          </tr>
          <tr>
            <td>${times[12].rank}</td>
            <td><img src="${times[12].team.logo}" style="width: 4vw"></td>
            <td>${times[12].team.name}</td>
            <td>${times[12].points}</td>
          </tr>
          <tr>
            <td>${times[13].rank}</td>
            <td><img src="${times[13].team.logo}" style="width: 4vw"></td>
            <td>${times[13].team.name}</td>
            <td>${times[13].points}</td>
          </tr>
          <tr>
            <td>${times[14].rank}</td>
            <td><img src="${times[14].team.logo}" style="width: 4vw"></td>
            <td>${times[14].team.name}</td>
            <td>${times[14].points}</td>
          </tr>
          <tr>
            <td>${times[15].rank}</td>
            <td><img src="${times[15].team.logo}" style="width: 4vw"></td>
            <td>${times[15].team.name}</td>
            <td>${times[15].points}</td>
          </tr>
          <tr>
            <td>${times[16].rank}</td>
            <td><img src="${times[16].team.logo}" style="width: 4vw"></td>
            <td>${times[16].team.name}</td>
            <td>${times[16].points}</td>
          </tr>
          <tr>
            <td>${times[17].rank}</td>
            <td><img src="${times[17].team.logo}" style="width: 4vw"></td>
            <td>${times[17].team.name}</td>
            <td>${times[17].points}</td>
          </tr>
          <tr>
            <td>${times[18].rank}</td>
            <td><img src="${times[18].team.logo}" style="width: 4vw"></td>
            <td>${times[18].team.name}</td>
            <td>${times[18].points}</td>
          </tr>
          <tr>
            <td>${times[19].rank}</td>
            <td><img src="${times[19].team.logo}" style="width: 4vw"></td>
            <td>${times[19].team.name}</td>
            <td>${times[19].points}</td>
          </tr>
        </tbody>
    </table>
    `
    
    
    })
    .catch(err => {
	    console.log(err);
    });
    });

}

function mostrarJogos(){
    $('#anoSelect').on('change', function() {
        divTimes.innerHTML = ""
        const anoSelecionado = $(this).val();
        fetch(`https://v3.football.api-sports.io/fixtures?season=${anoSelecionado}&league=71`, {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-host": "v3.football.api-sports.io",
		    "x-rapidapi-key": apiKey
	    }
    })
    .then(response => {
        return response.json()
    })
    .then(resposta => { 
        let times = resposta.response
        times.forEach(time => {
            let golsCasa = time.goals.home
            let golsFora = time.goals.away
            let timeCasa = time.teams.home.name
            let escudoCasa = time.teams.home.logo
            let timeFora = time.teams.away.name
            let escudoFora = time.teams.away.logo

            divTimes.innerHTML+=`
            <div class="row">
                <div class="col s12 m12 s12 offset-s1">
                    <div class="card grey lighten-2">
                        <div class="card-content" style="display: inline-flex;">
                            <img src="${escudoCasa}" alt="${timeCasa}" style="margin-right: 1vw;" width="50vw">
                            <h4>${golsCasa}</h4>
                            <h4>X</h4>
                            <h4>${golsFora}</h4>
                            <img src="${escudoFora}" alt="${timeFora}" style="margin-left: 1vw;" width="50vw">
                        </div>
                    </div>
                </div>
            </div>
        `
    });
})
.catch(err => {
	console.log(err);
});
});

}
