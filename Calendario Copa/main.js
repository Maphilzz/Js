function createGame(player1,hour,player2){
  return `<li>
           <img src="./asstes/${player1}-ícone.svg" alt="${player1}">
           <strong> ${hour} </strong>
           <img src="./asstes/${player2}-ícone.svg" alt="${player2}">
         </li>
         `
}

let delay = -0.4;
function createCard(date, day , games ){
  delay= delay + 0.4;
  return `<div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day} </span></h2>
        <ul>
          ${games}
        </lu>
      </div>
    `
}

document.querySelector("#cards").innerHTML = 
       createCard("24/11","quinta",
           createGame("suiça", "07:00", "camaroes") +
           createGame("uruguai", "10:00", "coreiadosul") +
           createGame("portugal", "13:00", "gana") +
           createGame("brasil", "16:00", "servia") ) +
       createCard("28/11","segunda",
           createGame("camaroes", "07:00", "servia") +
           createGame("coreiadosul", "10:00", "gana") +
           createGame("brasil", "13:00", "suiça") +
           createGame("portugal", "16:00", "uruguai")) +
       createCard("02/11","sexta",
           createGame("coreiadosul", "12:00", "portugal") +
           createGame("gana", "12:00", "uruguai") +
           createGame("servia", "16:00", "suiça") +
          createGame("camaroes", "16:00", "brasil"))

